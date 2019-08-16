import React from 'react';
import './login.css';

import Logo from '../../img/happy.png';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto text-center">
              <img className="mb-4" src={Logo} alt="Logo" width="72" height="72" />
              <h1 class="h3 mb-3 font-weight-normal">Login</h1>
  
              <input type="email" className="form-control" placeholder="Email" autofocus />
              <input type="password" className="form-control" placeholder="Senha" />

              <button className="btn btn-lg btn-entrar btn-block" type="button">Entrar</button>
              
              <p class="mt-5 mb-3">Recuperar Senha</p>
            </form>
        </div>
    );
}

export default Login;