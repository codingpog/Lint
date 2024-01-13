// PlaidLinkButton.js

import React, { useState } from "react";
import axios from "axios";
import PlaidLink from "./PlaidLink"; // Import PlaidLink component

const PlaidLinkButton = ({ onTransactionsFetched }) => {
  const [linkToken, setLinkToken] = useState("");

  const createLinkToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/create_link_token"
      );
      setLinkToken(response.data.link_token);
    } catch (error) {
      console.error("Error creating link token:", error);
    }
  };

  const handlePlaidSuccess = async (publicToken) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/set_access_token",
        {
          public_token: publicToken,
        }
      );
      const accessToken = response.data.access_token;
      // Fetch transactions using the access token
      const transactionsResponse = await axios.get(
        "http://localhost:8000/api/transactions",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      onTransactionsFetched(transactionsResponse.data.latest_transactions);
    } catch (error) {
      console.error("Error exchanging public token:", error);
    }
  };

  return (
    <div>
      <button onClick={createLinkToken}>Create Link Token</button>
      {linkToken && (
        <PlaidLink onSuccess={handlePlaidSuccess} linkToken={linkToken} />
      )}
    </div>
  );
};

export default PlaidLinkButton;
