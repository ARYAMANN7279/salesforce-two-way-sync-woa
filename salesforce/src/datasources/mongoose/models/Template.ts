const { model, Schema } = require('mongoose');

const SomeModelSchema = new Schema(
  {
    OrderId: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const SomeModel = model('some-model', SomeModelSchema, 'some-model');
module.exports = {
  type: 'SomeModel', //The name by which you will access methods of this collection/model
  model: SomeModel,
};
