const mongoose = require('mongoose');

const { Schema } = mongoose;

const tradeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  entryPrice: {
    type: Number,
    required: true,
  },
  exitPrice: {
    type: Number,
    required: false,
  },
  sL: {
    type: Number,
    require: false,
  },
  tP: {
    type: Number,
    require: false,
  },
  winLose: {
    type: String
  }
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
