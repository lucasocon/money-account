
const store = require('./store');

function getTransactions() {
  return store.getTransactions();
}

function addTransaction(payload) {
  return new Promise(async (resolve, reject) => {
    store.addTransaction(payload);

    resolve(payload);
  })
}

function getTransaction(id) {
  return new Promise(async (resolve, reject) => {
    if(!id) {
      reject('Invalid ID supplied');

      return false;
    }

    const transaction = await store.getTransaction(id);
    resolve(transaction);
  });
}

module.exports = {
  getTransactions,
  addTransaction,
  getTransaction
}
