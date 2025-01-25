import { GSContext } from '@godspeedsystems/core';

export default async function (ctx: GSContext, args: any) {
  const { datasources, logger } = ctx;

  try {
    // Salesforce platform event payload
    const payload = {
      OrderId: args.orderId || 'Default id',
      CustomerName: args.customerName || 'Default name',
      Status: args.status || 'Deafault status',
    };

    // Publish the platform event
    const result = await datasources.salesforce_pub.publish({
      event: 'orderPlaced__e', // Replace with your event name
      data: payload,
    });

    logger.info('Platform event published successfully:', result);
    return result;
  } catch (error) {
    logger.error('Error publishing Salesforce event:', error);
    throw error;
  }
}
