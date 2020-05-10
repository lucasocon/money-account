const uuid = require('uuid');
const {
  find,
  filter,
  sum
} = require('lodash');

let transactions = []

const getBalance = () => {
  const debitAmounts = filter(transactions, { type: 'debit' }).map(transaction => transaction.amount);
  const creditAmounts = filter(transactions, { type: 'credit' }).map(transaction => transaction.amount);

  return sum(debitAmounts) - sum(creditAmounts);
}
const getTransactions = () => {
  return transactions;
}

const addTransaction = (payload) => {
  payload.id = uuid.v4();
  payload.effectiveDate = new Date();
  transactions.push(payload);

  return payload;
}

const getTransaction = (id) => {
  const transaction = find(transactions, { id });

  return transaction;
}

module.exports = {
  getBalance,
  getTransactions,
  addTransaction,
  getTransaction
}
