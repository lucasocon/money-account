const Model = require('./model');

async function getBalance() {
  const debitBalance = await Model.aggregate([
    { $match: { type: 'debit' } },
    { $group: { _id: null, amount: { $sum: { "$toDouble": "$amount" } } } }
  ])
  const creditBalance = await Model.aggregate([
    { $match: { type: 'credit' } },
    { $group: { _id: null, amount: { $sum: { "$toDouble": "$amount" } } } }
  ])

  return creditBalance[0].amount - debitBalance[0].amount;
}

async function getTransactions() {
  const transactions = await Model.find({});

  return transactions;
}

function addTransaction(payload) {
  const transaction = new Model(payload);
  transaction.effectiveDate = new Date();
  transaction.save();
}

async function getTransaction(id) {
  const transaction = await Model.findOne({
    _id: id
  });

  return transaction;
}

module.exports = {
  getBalance,
  getTransactions,
  addTransaction,
  getTransaction
}
