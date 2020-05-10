import React from "react";
import { UncontrolledCollapse, Card, CardBody } from "reactstrap";
import TransactionCollapse from './TransactionCollapse'


const TransactionTableRow = ({ transaction, index }) => {
  return (
    <>
      <tr
        key={`${transaction._id}`}
        id={`transaction-${index}`}
        className={`tabl ${transaction.type == 'credit' ? 'alert-primary' : 'alert-danger'}`} >
        <td className="col-6" key={`${transaction.type}-id`}>
          {transaction.type}
        </td>
        <td className="col-6" key={`${transaction.amount}-id`}>
          {transaction.amount}
        </td>
      </tr>
      <TransactionCollapse transaction={transaction} index={index} />
    </>
  );
}

export default TransactionTableRow;
