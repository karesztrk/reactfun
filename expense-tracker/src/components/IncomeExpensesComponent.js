import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Row, Col, Typography, Card } from 'antd';

export function IncomeExpensesComponent() {
  const { Title } = Typography;
  const { transactions } = useContext(GlobalContext);
  const expense = (transactions
    .map((t) => t.amount)
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc+=amount), 0) * -1).toFixed(2);

  const income = transactions
    .map((t) => t.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc+=amount), 0).toFixed(2);
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title={<Title level={4}>Income</Title>}>
          <div className="plus">{income}</div>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={<Title level={4}>Expense</Title>}>
          <div className="minus">{expense}</div>
        </Card>
      </Col>
    </Row>
  )
}