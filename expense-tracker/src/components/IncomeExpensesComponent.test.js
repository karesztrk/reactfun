import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {IncomeExpensesComponent} from './IncomeExpensesComponent';
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
},{
  amount: -100,
  id: 3,
  text,
}];

afterEach(cleanup);

test('renders income expense', () => {
  const { getByText, getAllByText } = render(<IncomeExpensesComponent />);
  const income = getByText('Income');
  const expense = getByText('Expense');
  const balance = getAllByText(/0/);
  expect(income).toBeInTheDocument();
  expect(expense).toBeInTheDocument();
  expect(balance).toHaveLength(2);
});

test('renders income expense correctly', () => {
  const { getByText } = render(
    <GlobalContext.Provider value={{
      transactions,
    }}>
      <IncomeExpensesComponent />
    </GlobalContext.Provider>,
  );

  const income = getByText(/30/);
  const expense = getByText(/100/);
  expect(income).toBeInTheDocument();
  expect(expense).toBeInTheDocument();
});