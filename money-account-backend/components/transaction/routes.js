const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const {
  checkIfIsLocked,
  isValidTransaction,
  checkValidId
} = require('../../middleware/transactionMiddleware');

const router = express.Router();

router.get('/', checkIfIsLocked, async (req, res) => {
  try {
    const transactionList = await controller.getTransactions();
    response.success(req, res, transactionList, 200);
  } catch (e) {
    response.error(req, res, 'Unexpected Error', 500, e);
  }
});

router.post('/', [checkIfIsLocked, isValidTransaction], async (req, res) => {
  const payload = {
    type: req.body.type,
    amount: req.body.amount
  }

  try {
    req.app.set('locked', true);

    const transaction = await controller.addTransaction(payload);
    response.success(req, res, transaction, 201);

    req.app.set('locked', false);
  } catch (e) {
    req.app.set('locked', false);
    response.error(req, res, e, 400, e);
  }
});

router.get('/:id', [checkIfIsLocked, checkValidId], async (req, res) => {
  try {
    const transaction = await controller.getTransaction(req.params.id);

    if (transaction) {
      response.success(req, res, transaction, 200);
    } else {
      response.error(req, res, 'Transaction not found', 404, 'Transaction not found');
    }
  } catch (e) {
    response.error(req, res, 'Internal error', 500, e);
  }
});

module.exports = router;
