import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {TransactionComponent} from './TransactionComponent';
import '@testing-library/jest-dom/extend-expect'

const transaction = {
  amount: 10,
  id: 1,
  text: 'Hi'
};

afterEach(cleanup);

test('renders component', () => {
  const { getByText } = render(<TransactionComponent transaction={transaction} />);
  const transactionText = getByText(transaction.text);
  const transactionAmount = getByText(/10/);
  expect(transactionText).toBeInTheDocument();
  expect(transactionAmount).toBeInTheDocument();
});

test('adds plus sign for positive amount', () => {
  const { getByText } = render(<TransactionComponent transaction={transaction} />);
  const transactionAmount = getByText(`+${transaction.amount}`);
  expect(transactionAmount).toBeInTheDocument();
});

test('adds minus sign for negative amount', () => {
  const t = {...transaction, amount: -1 * transaction.amount};
  const { getByText } = render(<TransactionComponent transaction={t} />);
  const transactionAmount = getByText(`-${transaction.amount}`);
  expect(transactionAmount).toBeInTheDocument();
});