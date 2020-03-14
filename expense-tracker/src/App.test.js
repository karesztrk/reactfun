import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';
import {GlobalContext} from './context/GlobalState';
import {matchMediaMock} from './setupTests';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
// Mandatory to work with async DOM update
import MutationObserver from 'mutation-observer';
global.MutationObserver = MutationObserver;

beforeAll(matchMediaMock);
afterEach(cleanup);

test('renders app', () => {
  const { getByText } = render(<App />);
  const header = getByText("Expense Tracker");
  expect(header).toBeInTheDocument();
});

test('can submit new transaction', async () => {
  const text = 'Transaction text';
  const amount = 100;
  const { container, getAllByText, getByPlaceholderText, findByText } = render(<GlobalContext.Provider value={{
    transactions: [],
  }}>
    <App />
  </GlobalContext.Provider>,);

  const textInput = getByPlaceholderText(/Enter text.../i);
  const amountInput = getByPlaceholderText(/Enter amount.../i);

  fireEvent.change(textInput, { target: { value: text } });
  fireEvent.change(amountInput, { target: { value: amount } });
  fireEvent.submit(container.querySelector('form'));

  const newTransactionText = await findByText(/Transaction text/i);

  const newTransactionAmount = getAllByText(/100/);

  expect(newTransactionText).toBeInTheDocument();
  // Balance & history && Income+Expense
  expect(newTransactionAmount).toHaveLength(3);
});
