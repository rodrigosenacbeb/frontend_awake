import React, { useState } from 'react';
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Logo from '../../img/happy.png';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState('');
    const [msgTipo, setMsgTipo] = useState('');

    function logar(){
        setCarregando(1);
        setMsgTipo(null);

        firebase.auth().signInWithEmailAndPassword(email, senha).then(res =>{
            setCarregando(0);
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch({type: 'LOG_IN', usuarioEmail: email });    
            }, 2000);
            
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');
        });           
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

              <div className="msg-login text-white my-3" >
                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você agora está logado! &#128522;</span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Senha ou usuário inválido! &#128546;</span>}                                
              </div>
              

            {
              carregando 
              ?
              <div class="spinner-border text-light" role="status"><span class="sr-only"></span></div>
              :
              <button onClick={logar}  className="btn btn-lg btn-entrar btn-block font-weight-bold" type="button">Entrar</button>
            } 
             <div className="opcoes-login mt-5">
              <Link to='/recuperarsenha' class="mx-2">Recuperar Senha</Link> 
              <span className="text-white">&#9733;</span>
              <Link to='/novousuario' class="mx-2">Quero Cadastrar</Link> 
             </div>

            </form>
        </div>
    );
}

export default Login;