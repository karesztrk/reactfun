import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import {GlobalContext} from './context/GlobalState';
import { addTransaction } from './services/firebase';

// Mandatory to work with async DOM update
import MutationObserver from 'mutation-observer';
global.MutationObserver = MutationObserver;

jest.mock('./services/firebase');
jest.mock('firebase/app');

afterEach(cleanup);

test('renders app', () => {
  const { getByText } = render(<App />);
  const header = getByText("Expense Tracker");
  expect(header).toBeInTheDocument();
});

test('can submit new transaction', async () => {
  addTransaction.mockResolvedValueOnce({});
  const text = 'Transaction text';
  const amount = 100;
  const { getByText, getByPlaceholderText } = render(<GlobalContext.Provider value={{
    transactions: [],
  }}>
    <App />
  </GlobalContext.Provider>);

  const textInput = getByPlaceholderText(/Enter text.../i);
  const amountInput = getByPlaceholderText(/Enter amount.../i);

  fireEvent.change(textInput, { target: { value: text } });
  fireEvent.change(amountInput, { target: { value: amount } });
  fireEvent.click(getByText('Add transaction'));


  //const newTransactionText = await findByText(/Transaction text/i);

  // const newTransactionAmount = await getAllByText(/100/);

  expect(addTransaction).toHaveBeenCalledTimes(1);
  //expect(newTransactionText).toBeInTheDocument();
  // // Balance & history && Income+Expense
  // expect(newTransactionAmount).toHaveLength(3);
});
