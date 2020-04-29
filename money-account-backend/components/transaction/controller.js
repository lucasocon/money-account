
const store = require('./store');

function getTransactions() {
  return new Promise((resolve, reject) => {
    resolve(store.getTransactions());
  });
}

function addTransaction(payload) {
  return new Promise(async (resolve, reject) => {
    const balance = await store.getBalance();

    if (!payload.type || (payload.amount == undefined ||payload.amount == null)) {
      console.error('[transactionController] No type or amount');
      reject('Invalid input');

      return false;
    }

    if (payload.type === 'debit' && (balance - payload.amount < 0)) {
      console.error("Balance can't be negative");
      reject("Balance can't be negative");

      return false;
    }

    if (!['credit', 'debit'].includes(payload.type)) {
      console.error('Only credit or debit transactions are allowed');
      reject('Only credit or debit transactions are allowed');

      return false;
    }

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
