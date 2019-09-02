import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import './navbar.css';

import Logo from '../../img/happy.png';

function Navbar(){

    const dispatch = useDispatch();

    return(
        <header id="topo">
        <div class="collapse" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">Sobre</h4>
                <p class="text-light">
                    Awake é um site para divulgação de eventos da sua cidade.
                    Você pode filtrar pelo tipo de evento que você deseja e
                    encontrar o melhor programa para você e seus amigos.
                </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contatos</h4>
                <ul class="list-unstyled" id="menu">
                  <li><a href="#" class="text-white"><i class="fab fa-instagram"></i> Siga-nos no Instagram</a></li>
                  <li><a href="#" class="text-white"><i class="fab fa-facebook-square"></i> Curta no Facebook</a></li>
                  <li><a href="#" class="text-white"><i class="far fa-envelope"></i> Envie um Email</a></li>
                  <li><hr/></li>
                  <li><Link to='/home' class="text-white"><i class="fas fa-home"></i> Início</Link></li>
                  {
                    useSelector(state => state.usuarioLogado) <= 0 
                    ?
                  <>
                  <li><Link to='/' class="text-white"><i class="fas fa-sign-in-alt"></i> Entrar</Link></li>
                  <li><Link to='/novousuario' class="text-white"><i class="fas fa-user"></i> Criar Conta</Link></li>
                  </>
                    :
                  <>
                  <li><Link to='/novoevento' class="text-white"><i class="fas fa-plus"></i> Novo Evento</Link></li>
                  <li><Link to="/home/meus" class="text-white"><i class="fas fa-list"></i>  Meus Evento</Link></li>
                  <li><Link onClick={() => dispatch({type: 'LOG_OUT'})} class="text-white"><i class="fas fa-sign-out-alt"></i> Sair</Link></li>
                  </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a href="/home" class="navbar-brand d-flex align-items-center">
              <img src={Logo} height="30" width="30"/>
              <strong class="pl-1">Awake</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    )
}

export default Navbar;