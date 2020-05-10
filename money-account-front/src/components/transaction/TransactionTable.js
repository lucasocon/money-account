import React from "react";
import { Table } from "reactstrap";
import TransactionTableRow from '../transaction/TransactionTableRow'

const TransactionTable = ({ transactions }) => {
  return (
    <Table responsive>
        <thead>
          <tr>
            <th key='type'>Type</th>
            <th key='amount'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return <TransactionTableRow transaction={transaction} index={index}/>
          })}
        </tbody>
      </Table>
  )
}

export default TransactionTable;
