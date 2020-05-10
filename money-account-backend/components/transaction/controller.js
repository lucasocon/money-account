const store = require('./store');

const getTransactions = () => {
  return store.getTransactions();
}

const addTransaction = (payload) => {
  const transaction = store.addTransaction(payload);

  return transaction;
}

const getTransaction = (id) => {
  const transaction = store.getTransaction(id);

  return transaction;
}

module.exports = {
  getTransactions,
  addTransaction,
  getTransaction
}
