// PlaidLink.js

import React, { useEffect } from "react";

const PlaidLink = ({ onSuccess, linkToken }) => {
  useEffect(() => {
    window.Plaid.create({
      token: linkToken,
      onSuccess: (publicToken) => {
        onSuccess(publicToken);
      },
    }).open();
  }, [linkToken, onSuccess]);

  return null;
};

export default PlaidLink;
