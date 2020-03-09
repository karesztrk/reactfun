import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function TransactionComponent({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  const expense = transaction.amount < 0;
  const amount = `${expense ? '-' : '+'}${Math.abs(transaction.amount)}`;
  const style = expense ? 'minus' : 'plus';

  const onDeleteClick = () => deleteTransaction(transaction.id);

  return (
    <li className={style}>
      {transaction.text}
      <span>{amount}</span>
      <button className="delete-btn" onClick={onDeleteClick}>x</button>
    </li>
  )
}