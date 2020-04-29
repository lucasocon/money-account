import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, UncontrolledCollapse, Card, CardBody } from "reactstrap";
import axios from 'axios';


const TransactionIndex = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const response = await axios.get('http://localhost:3000/transactions', {});
    setTransactions(response.data.body);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Container>
      {transactions.length === 0 && <span>No transactions in the system</span>}
      <Table responsive>
        <thead>
          <tr>
            <th key='type'>Type</th>
            <th key='amount'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <>
                <tr
                  key={`${transaction._id}`}
                  id={`transaction-${index}`}
                  className={transaction.type == 'credit' ? 'alert-primary' : 'alert-danger'}
                  style={{ cursor: "pointer", marginBottom: '1rem' }}
                  onClick={() => {}}
                >
                  <td key={`${transaction.type}-id`}>
                    {transaction.type}
                  </td>
                  <td key={`${transaction.amount}-id`}>{transaction.amount}</td>
                </tr>
                <UncontrolledCollapse toggler={`#transaction-${index}`}>
                  <Card>
                    <CardBody>
                      <ul>
                        <li>ID: {transaction._id}</li>
                        <li>Type: {transaction.type}</li>
                        <li>Amount: {transaction.amount}</li>
                        <li>Effective Date: {transaction.effectiveDate}</li>
                      </ul>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </>
            );
          })}
        </tbody>
      </Table>

      <Row style={{ paddingTop: "1em", justifyContent: "flex-end" }}>
        <Button onClick={getTransactions}>Get Transactions</Button>
      </Row>
    </Container>
  )

}

export default TransactionIndex;
