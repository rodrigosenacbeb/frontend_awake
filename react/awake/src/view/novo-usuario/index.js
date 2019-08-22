import  React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar/';
import './novo-usuario.css';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msg, setMsg] = useState();

    function cadastrar(){
        setMsg('');

        if(!email || !senha){
            setMsg('Você precisa informar o email e senha para cadastrar!');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
            setMsg('Usuário cadastrado com sucesso!');
        }).catch(erro => {            
            switch(erro.code){
                case 'auth/weak-password':
                setMsg('A senha deve ter no mínimo 6 caracteres!');
                break;

                case 'auth/invalid-email':
                setMsg('E-mail inválido!');
                break;

                case 'auth/email-already-in-use':
                setMsg('Este e-mail já está sendo utilizado por outro usuário!');
                break;

                default:
                setMsg('Não foi possível cadastrar o usuário!');
                break;
            }            
        });
    }

    return(
        <>
            <Navbar/>
            <div className="form-cadastro">
                <form className="text-center mx-auto mt-5">
                    <h3 className="font-weight-bold my-5">Cadastro de Usuário</h3>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha"/>

                    <button onClick={cadastrar} type="button" className="btn btn-lg btn-block my-3 btn-cadastro">
                        Cadastrar
                    </button>

                    <span>{msg}</span>
                </form>
            </div>
            
        </>
    )
}

export default NovoUsuario;