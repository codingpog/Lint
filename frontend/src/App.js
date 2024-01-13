// App.js

import React, { useState } from "react";
import PlaidLinkButton from "./components/PlaidLinkButton";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleTransactionsFetched = (latestTransactions) => {
    setTransactions(latestTransactions);
  };

  return (
    <div>
      <h1>Plaid Transactions</h1>
      <PlaidLinkButton onTransactionsFetched={handleTransactionsFetched} />
      <div>
        <h2>Latest Transactions:</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.transaction_id}>
              {transaction.name} - ${transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
