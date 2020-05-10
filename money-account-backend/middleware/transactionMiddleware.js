const _ = require('lodash');
const response = require('../network/response');
const store = require('../components/transaction/store');

async function isValidTransaction(req, res, next) {
  if (!req.body.type || _.isNil(req.body.amount)) {
    console.error('[transactionMiddleware] No type or amount');
    return response.error(req, res, 'Invalid input', 400, 'Invalid input')
  }

  const balance = await store.getBalance();
  if (req.body.type === 'debit' && (balance - req.body.amount < 0)) {
    console.error('[transactionMiddleware] Balance cannot be negative');
    return response.error(req, res, 'Balance cannot be negative', 400, 'Balance cannot be negative')
  }

  if (!['credit', 'debit'].includes(req.body.type)) {
    console.error('[transactionMiddleware] Only credit or debit transactions are allowed');
    return response.error(req, res, 'Only credit or debit transactions are allowed', 400, 'Only credit or debit transactions are allowed')
  }

  next();
};

module.exports = {
  isValidTransaction
}
