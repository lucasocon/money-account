import React from "react";
import { UncontrolledCollapse } from "reactstrap";

const TransactionCollapse = ({ transaction, index }) => {
  return (
    <UncontrolledCollapse toggler={`#transaction-${index}`}>
      <ul>
        <li>ID: {transaction._id}</li>
        <li>Type: {transaction.type}</li>
        <li>Amount: {transaction.amount}</li>
        <li>Effective Date: {transaction.effectiveDate}</li>
      </ul>
    </UncontrolledCollapse>
  )
}

export default TransactionCollapse;
