import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {TransactionListComponent} from './TransactionListComponent';
import '@testing-library/jest-dom/extend-expect'
import {GlobalContext} from '../context/GlobalState';
import {matchMediaMock} from '../setupTests';

const text = 'Hi';

const transactions = [{
  amount: 10,
  id: 1,
  text,
},{
  amount: 20,
  id: 2,
  text,
}];

beforeAll(matchMediaMock);
afterEach(cleanup);

test('renders clean list', () => {
  const { container, getByText } = render(<TransactionListComponent />);
  const emptyContainer = container.querySelector('.ant-list-empty-text');
  const title = getByText('No Data');
  expect(emptyContainer).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test('renders two transactions', () => {
  const { getAllByText } = render(
    <GlobalContext.Provider value={{
      transactions,
    }}>
      <TransactionListComponent />
    </GlobalContext.Provider>,
  );
  const transactionText = getAllByText(/Hi [+|-]\d/);
  expect(transactionText).toHaveLength(2);
});