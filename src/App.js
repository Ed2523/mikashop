import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router path='/' exact>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
