import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Typography } from 'antd';

export function BalanceComponent() {
  const { Title } = Typography;
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .map((t) => t.amount)
    .reduce((acc, item) => (acc+=item), 0)
    .toFixed(2);
  return (
    <>
        <Title level={4}>Your Balance</Title>
        <Title level={1}>${balance}</Title>
    </>
  )
}