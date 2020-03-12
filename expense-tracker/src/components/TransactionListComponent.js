import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionComponent } from './TransactionComponent';
import { Divider, List } from 'antd';

export function TransactionListComponent() {
  const { transactions } = useContext(GlobalContext);
  const renderItem = (t) => (<TransactionComponent key={t.id} transaction={t} />);
  return (
    <>
      <Divider className="separator" orientation="left">
        History
      </Divider>
      <List bordered dataSource={transactions} renderItem={renderItem} pagination={{
        size: 'small',
        pageSize: 5,
      }}/>
    </>
  )
}