import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

/* PÁGINAS */
import Home from './view/home/';
import Login from './view/login/';
import NovoUsuario from './view/novo-usuario/';
import RecuperarSenha from './view/recuperar-senha/';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/recuperarsenha' component={RecuperarSenha} />
        </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
