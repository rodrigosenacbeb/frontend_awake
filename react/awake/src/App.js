import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/* PÁGINAS */
import Home from './view/home/';
import Login from './view/login/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
