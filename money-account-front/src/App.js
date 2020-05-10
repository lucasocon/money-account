import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TransactionIndex from './components/transaction/TransactionIndex'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TransactionIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
