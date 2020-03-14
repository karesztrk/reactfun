import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {AddTransactionComponent} from './AddTransactionComponent';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

test('renders income expense', () => {
  const { getByText, getByLabelText, getByPlaceholderText } = render(<AddTransactionComponent />);
  const title = getByText(/Add new transaction/i);
  const text = getByLabelText(/Text/);
  const textInput = getByPlaceholderText(/Enter text.../i);
  const amount = getByLabelText(/Amount/);
  const amountInput = getByPlaceholderText(/Enter amount.../i);
  const submitButton = getByText(/Add transaction/i);
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(textInput).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(amountInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('can receive input', () => {
  const { getByPlaceholderText } = render(<AddTransactionComponent />);
  const textInput = getByPlaceholderText(/Enter text.../i);
  const amountInput = getByPlaceholderText(/Enter amount.../i);

  fireEvent.change(textInput, { target: { value: 'Hi' } });
  fireEvent.change(amountInput, { target: { value: '100' } });

  expect(textInput.value).toBe('Hi');
  expect(amountInput.value).toBe('100');
});