import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {BalanceComponent} from './BalanceComponent';
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
  const { getByText } = render(<BalanceComponent />);
  const title = getByText(/Your balance/i);
  const balance = getByText(/0/);
  expect(title).toBeInTheDocument();
  expect(balance).toBeInTheDocument();
});

test('renders balance correctly', () => {
  const { getByText } = render(
    <GlobalContext.Provider value={{
      transactions,
    }}>
      <BalanceComponent />
    </GlobalContext.Provider>,
  );

  const balance = getByText(/-70/);
  expect(balance).toBeInTheDocument();
});