// Transactions.js

import React, { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    // Initial transactions data
    { id: 1, description: "Transaction 1", amount: 100 },
    { id: 2, description: "Transaction 2", amount: -50 },
    // Add more transactions as needed
  ]);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
