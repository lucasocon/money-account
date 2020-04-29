const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
  amount: String,
  type: String,
  effectiveDate: Date
});
const model = mongoose.model('Transaction', mySchema);

module.exports = model;
