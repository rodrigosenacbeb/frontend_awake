import  React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar/';
import './recuperar-senha.css';

function RecuperarSenha(){
    return(
        <>
        <Navbar />
        <form className="text-center form-recuperar-senha mx-auto mt-5">
            <h3>Recuperar Senha</h3>
            <input type="email" className="form-control my-5" placeholder="Email"/>
            <button type="button" className="btn btn-lg btn-block">
            Recuperar
            </button>
        </form>
        
        </>
    )
}

export default RecuperarSenha;