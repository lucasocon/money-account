import axios from 'axios';

const TransactionService = {
  getTransactions: async () => {
    try {
      const response = axios.get('http://localhost:3001/transactions');

      return response;
    } catch (error) {
      console.error(error);
      alert('Error trying to fetch API');
    }
  }
}

export default TransactionService;
