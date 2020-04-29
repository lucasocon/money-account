const transaction = require('./components/transaction/network');

const routes = function (server) {
  server.use('/transactions', transaction);
}

module.exports = routes;
