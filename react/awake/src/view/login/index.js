import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="login-content">
            <form className="form-signin mx-auto text-center">
              <img className="mb-4" src="" alt="Logo" width="72" height="72" />
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