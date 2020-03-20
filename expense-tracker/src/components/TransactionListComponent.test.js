import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {TransactionListComponent} from './TransactionListComponent';
import '@testing-library/jest-dom/extend-expect'
import {GlobalContext} from '../context/GlobalState';

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

jest.mock('../services/firebase');
jest.mock('firebase/app');

afterEach(cleanup);

test('renders clean list', () => {

  const { container, getByText } = render(<TransactionListComponent />);
  const title = getByText('History');
  expect(title).toBeInTheDocument();
  expect(container.firstChild.nextSibling).toBeEmpty();
});

test('renders two transactions', () => {
  const { getAllByText } = render(
    <GlobalContext.Provider value={{
      transactions,
    }}>
      <TransactionListComponent />
    </GlobalContext.Provider>,
  );
  const transactionText = getAllByText(transactions[0].text);
  expect(transactionText).toHaveLength(2);
});