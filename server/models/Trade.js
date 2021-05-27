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
  entryprice: {
    type: Number,
    required: true,
    min: 0
  },
  exitprice: {
    type: Number,
    required: false,
    min: 0
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
    type: Number,
    min: 0,
    default: 0
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
