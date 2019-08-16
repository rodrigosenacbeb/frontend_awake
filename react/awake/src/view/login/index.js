import React, { useState } from 'react';
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Logo from '../../img/happy.png';

function Login(){
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar(){
        dispatch({type: 'LOG_IN', usuarioEmail: email });       
    }

    return(
        <div className="login-content d-flex align-items-center">

        {
            useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/home'/> : null
        }        

            <form className="form-signin mx-auto text-center">
              <img className="mb-4" src={Logo} alt="Logo" width="72" height="72" />
              <h1 class="h3 mb-3 font-weight-bold text-white">Login</h1>
  
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" autofocus />
              <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

              <div className="msg-login text-white" hidden>
                <span><strong>WoW!</strong> Você agora está logado! &#128522;</span>                
                <span><strong>Ops!</strong> Senha ou usuário inválido! &#128546;</span>
              </div>


              <button onClick={logar}  className="btn btn-lg btn-entrar btn-block mt-5 font-weight-bold" type="button">Entrar</button>
              
             <div className="opcoes-login mt-5">
              <a href="#" class="mx-2">Recuperar Senha</a> 
              <span className="text-white">&#9733;</span>
              <a href="#" class="mx-2">Quero Cadastrar</a> 
             </div>

            </form>
        </div>
    );
}

export default Login;