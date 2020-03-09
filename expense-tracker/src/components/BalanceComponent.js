import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function BalanceComponent() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .map((t) => t.amount)
    .reduce((acc, item) => (acc+=item), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}