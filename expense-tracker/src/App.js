import React from 'react';
import './App.css';
import { Balance, Head, IncomeExpenses, TransactionList, AddTransaction } from './components/';
import { Layout } from 'antd';

import { GlobalProvider } from './context/GlobalState';

function App() {
  const { Header , Content } = Layout;
  return (
    <GlobalProvider>
      <Layout className="layout" hasSider={false}>
        <Header>
          <Head />
        </Header>
        <Content className="content">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Content>
      </Layout>
    </GlobalProvider>
  );
}

export default App;
