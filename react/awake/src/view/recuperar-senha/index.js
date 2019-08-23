import  React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar/';
import './recuperar-senha.css';

function RecuperarSenha(){
    const [msg, setMsg] = useState();
    const [email, setEmail] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(
            setMsg('Enviamos um link no seu e-mail para você redefinir sua senha!')
        ).catch(erro => {
            setMsg('Verifique se o e-mail está correto!');
        })
    }


    return(
        <>
        <Navbar />
        <form className="text-center form-recuperar-senha mx-auto mt-5">
            <h3>Recuperar Senha</h3>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-5" placeholder="Email"/>            

            <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block">
            Recuperar
            </button>

            <p>{msg}</p>

            
        </form>
        
        </>
    )
}

export default RecuperarSenha;