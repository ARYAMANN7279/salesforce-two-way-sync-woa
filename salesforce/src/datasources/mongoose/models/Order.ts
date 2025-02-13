const { model, Schema } = require('mongoose');

const OrderSchema = new Schema({
  orderId: { type: String, required: true },
  status: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = {
  type: 'Order',
  model: model('Order', OrderSchema),
};
