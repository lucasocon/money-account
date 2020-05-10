const isNil = require('lodash/isNil');
const response = require('../network/response');
const store = require('../components/transaction/store');

const checkIfIsLocked = (req, res, next) => {
  if (req.app.get('locked')) {
    console.error('[transactionMiddleware] Store is locked');
    return response.error(req, res, 'Store is locked', 500, 'Store is locked');
  }

  next();
}

const isValidTransaction = (req, res, next) => {
  if (!req.body.type || isNil(req.body.amount)) {
    console.error('[transactionMiddleware] No type or amount');
    return response.error(req, res, 'Invalid input', 400, 'Invalid input');
  }

  if (!['credit', 'debit'].includes(req.body.type)) {
    console.error('[transactionMiddleware] Only credit or debit transactions are allowed');
    return response.error(req, res, 'Only credit or debit transactions are allowed', 400, 'Only credit or debit transactions are allowed');
  }

  if (req.body.amount < 0) {
    console.error('[transactionMiddleware] Amount cannot be negative');
    return response.error(req, res, 'Negative amount', 400, 'Negative amount');
  }

  const balance = store.getBalance();
  if (req.body.type === 'debit' && (balance - req.body.amount < 0)) {
    console.error('[transactionMiddleware] Balance cannot be negative');
    return response.error(req, res, 'Balance cannot be negative', 400, 'Balance cannot be negative');
  }

  next();
};

const checkValidId = (req, res, next) => {
  if(!req.params.id) {
    return response.error(req, res, 'Invalid ID supplied', 404, 'Invalid ID supplied');
  }

  next();
}

module.exports = {
  checkIfIsLocked,
  isValidTransaction,
  checkValidId
}
