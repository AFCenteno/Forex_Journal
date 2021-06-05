const mongoose = require('mongoose');

const { Schema } = mongoose;

const tradeSchema = new Schema({
  tradeId: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  entryPrice: {
    type: String,
    required: true,
  },
  exitPrice: {
    type: String,
    required: false,
  },
  sL: {
    type: String,
    require: false,
  },
  tP: {
    type: String,
    require: false,
  },
  winLose: {
    type: String,
    require: false
  },
  dateEnter: {
    type: String,
    required: true
  },
  dateExit: {
    type: String,
    required: false
  }
});



module.exports = tradeSchema;
