import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Input from './routes/Input';
import Time from './routes/Time';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Input} />
      <Route path="/time" component={Time} />
    </BrowserRouter>
  );
}

export default App;
