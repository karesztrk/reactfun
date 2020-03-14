import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import {GlobalContext} from './context/GlobalState';

afterEach(cleanup);

test('renders app', () => {
  const { getByText } = render(<App />);
  const header = getByText("Expense Tracker");
  expect(header).toBeInTheDocument();
});


test('can submit new transaction', async () => {
  const text = 'Transaction text';
  const amount = 100;
  const { getByText, getAllByText, getByPlaceholderText } = render(<GlobalContext.Provider value={{
    transactions: [],
  }}>
    <App />
  </GlobalContext.Provider>,);

  const textInput = getByPlaceholderText(/Enter text.../i);
  const amountInput = getByPlaceholderText(/Enter amount.../i);

  fireEvent.change(textInput, { target: { value: text } });
  fireEvent.change(amountInput, { target: { value: amount } });
  fireEvent.click(getByText('Add transaction'));

  const newTransactionText = await getByText(/Transaction text/i);

  const newTransactionAmount = await getAllByText(/100/);

  expect(newTransactionText).toBeInTheDocument();
  // Balance & history && Income+Expense
  expect(newTransactionAmount).toHaveLength(3);
});
