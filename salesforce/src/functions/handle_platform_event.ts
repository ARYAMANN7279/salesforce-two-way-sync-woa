import { GSContext } from '@godspeedsystems/core';

export default async function (ctx: GSContext, args: any) {
  const { datasources, logger } = ctx;

  try {
    logger.info('Received Salesforce platform event:', args);

    // Send event data to Kafka
    await datasources.kafka.produce({
      topic: 'internal_sync_topic',
      data: args, // The received Salesforce event payload
    });

    logger.info('Event published to Kafka successfully.');
  } catch (error) {
    logger.error('Error processing Salesforce event:', error);
    throw error;
  }
}
