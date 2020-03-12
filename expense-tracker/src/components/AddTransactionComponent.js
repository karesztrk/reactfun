import React, { useContext, useState } from 'react';
import { Button, Input, InputNumber, Form, Divider } from 'antd';
import { GlobalContext } from '../context/GlobalState';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function AddTransactionComponent() {
  const { addTransaction } = useContext(GlobalContext);
  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const onTextChange = (e) => setText(e.target.value);

  const onAddClick = () => {
    const id = Math.floor(Math.random() * 1000000);
    const transactionAmount = Number(amount);
    addTransaction({
      id,
      text,
      amount: transactionAmount,
    });
  };

  return (
    <Form
      {...layout}
      onFinish={onAddClick}
    >
      <Divider className="separator" orientation="left">
        Add new transaction
      </Divider>
      <Form.Item
        rules={[{ required: true }]}
        label="Text"
        name="text">
        <Input value={text} onChange={onTextChange} placeholder="Enter text..."/>
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label="Amount"
        name="amount">
        <InputNumber value={amount} onChange={setAmount} placeholder="Enter amount..."
                     formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                     parser={value => value.replace(/\$\s?|(,*)/g, '')}/>
      </Form.Item>
      <Form.Item {...tailLayout}  >
        <Button type="primary" htmlType="submit">Add transaction</Button>
      </Form.Item>
    </Form>
  )
}