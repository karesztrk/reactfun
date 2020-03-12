import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { List } from 'antd';

export function TransactionComponent({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  const expense = transaction.amount < 0;
  const amount = `${expense ? '-' : '+'}${Math.abs(transaction.amount)}`;
  const style = `transaction ${expense ? 'minus' : 'plus'}`;

  const onDeleteClick = () => deleteTransaction(transaction.id);

  return (
    <List.Item className={style} key={transaction.id}
               actions={[<span onClick={onDeleteClick}>Delete</span>]}>
      {transaction.text} {amount}
    </List.Item>
  )
}