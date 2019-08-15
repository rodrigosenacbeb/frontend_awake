import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* PÁGINAS */
import Home from './view/home/';
import Login from './view/login/';

function App() {
  return (
    <div>
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
    </Router>
    </div>
  );
}

export default App;
