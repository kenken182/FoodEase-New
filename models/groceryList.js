const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model for how a certain ingredient will be inputted
const ItemSchema = new Schema({
  itemType: {
    type: String,
    required: false
  },
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)
