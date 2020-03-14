import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {TransactionComponent} from './TransactionComponent';
import '@testing-library/jest-dom/extend-expect'
import {matchMediaMock} from '../setupTests';

const transaction = {
  amount: 10,
  id: 1,
  text: 'Hi'
};

beforeAll(matchMediaMock);
afterEach(cleanup);

test('renders component', () => {
  const { getByText } = render(<TransactionComponent transaction={transaction} />);
  const transactionText = getByText(/Hi/);
  const transactionAmount = getByText(/10/);
  expect(transactionText).toBeInTheDocument();
  expect(transactionAmount).toBeInTheDocument();
});

test('adds plus sign for positive amount', () => {
  const { getByText } = render(<TransactionComponent transaction={transaction} />);
  const transactionAmount = getByText(/\+10/);
  expect(transactionAmount).toBeInTheDocument();
});

test('adds minus sign for negative amount', () => {
  const t = {...transaction, amount: -1 * transaction.amount};
  const { getByText } = render(<TransactionComponent transaction={t} />);
  const transactionAmount = getByText(/\-10/);
  expect(transactionAmount).toBeInTheDocument();
});