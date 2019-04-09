import React from 'react';
import './app.scss';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div className="app">App</div>;
};

export default withBookstoreService()(App);