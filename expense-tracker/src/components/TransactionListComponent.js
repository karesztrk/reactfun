import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionComponent } from './TransactionComponent';
import * as FirestoreService from '../services/firebase';

export function TransactionListComponent() {
  const { transactions, loadTransactions } = useContext(GlobalContext);

  useEffect(() => {
    const unsubscribe = FirestoreService.getTransactions((snapshot) => {
      const trans = snapshot.docs.map((doc) => {
        const { id } = doc;
        const { text, amount } = doc.data();
        return {
          id,
          text,
          amount
        }
      });
      loadTransactions(trans);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    }
  }, []);

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