import React, { useState, useEffect } from "react";
import { Button, Container, Row } from "reactstrap";
import TransactionService from '../../services/TransactionService'
import TransactionTable from '../transaction/TransactionTable'
import { get } from 'lodash';


const TransactionIndex = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const response = await TransactionService.getTransactions();
    setTransactions(get(response, 'data.body'));
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Container>
      {!transactions.length && <span>No transactions in the system</span>}

      <TransactionTable transactions={transactions} />
      <Row style={{ paddingTop: "1em", justifyContent: "flex-end" }}>
        <Button onClick={getTransactions}>Get Transactions</Button>
      </Row>
    </Container>
  )
}

export default TransactionIndex;
