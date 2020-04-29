const transactionRoutes = require('./components/transaction/routes');

const routes = (server) => {
  server.use('/transactions', transactionRoutes);
}

module.exports = routes;
