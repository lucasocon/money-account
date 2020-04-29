const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();

router.get('/', function (req, res) {
  controller.getTransactions().then((transactionList) => {
   response.success(req, res, transactionList, 200)
  })
  .catch((e) => {
    response.error(req, res, 'Unexpected Error', 500, e);
  })
});

router.post('/', function (req, res) {
  const payload = {
    type: req.body.type,
    amount: req.body.amount
  }

  controller.addTransaction(payload)
  .then((transaction) => {
    response.success(req, res, transaction, 201)
  })
  .catch((e) => {
    response.error(req, res, e, 400, e)
  })
});

router.get('/:id', function (req, res) {
  controller.getTransaction(req.params.id)
  .then((transaction) => {
    if (transaction) {
      response.success(req, res, transaction, 200);
    } else {
      response.error(req, res, 'Transaction not found', 404)
    }
  })
  .catch(e => {
    response.error(req, res, 'Internal error', 500, e);
  });
})

module.exports = router;
