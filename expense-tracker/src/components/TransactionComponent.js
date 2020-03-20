import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import * as FirestoreService from '../services/firebase';

export function TransactionComponent({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  const expense = transaction.amount < 0;
  const amount = `${expense ? '-' : '+'}${Math.abs(transaction.amount)}`;
  const style = expense ? 'minus' : 'plus';

  const onDeleteClick = () => {
    FirestoreService.deleteTransaction(
      transaction.id
    ).then(() => {
      deleteTransaction();
    }).catch((error) => console.error(error));
  };

  return (
    <li className={style}>
      {transaction.text}
      <span>{amount}</span>
      <button className="delete-btn" onClick={onDeleteClick}>x</button>
    </li>
  )
}