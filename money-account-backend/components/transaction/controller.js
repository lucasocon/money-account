
const store = require('./store');

function getTransactions() {
  return store.getTransactions();
}

async function addTransaction(payload) {
  const transaction = await store.addTransaction(payload);

  return payload
}

async function getTransaction(id) {
  if(!id) {
    throw new Error('Invalid ID supplied');
  }
  const transaction = await store.getTransaction(id);

  return transaction;
}

module.exports = {
  getTransactions,
  addTransaction,
  getTransaction
}
