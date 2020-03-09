import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionComponent } from './TransactionComponent';

export function TransactionListComponent() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map((t) => (<TransactionComponent key={t.id} transaction={t} />))
        }
      </ul>
    </>
  )
}