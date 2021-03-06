import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// Initialize Firebase
firebase.initializeApp(config);

export const addTransaction = (transaction) => firebase.firestore().collection('transactions').add(transaction);

export const deleteTransaction = (id) => firebase.firestore().collection('transactions').doc(id).delete();

export const getTransactions = (callback) => firebase.firestore().collection('transactions').onSnapshot(callback);