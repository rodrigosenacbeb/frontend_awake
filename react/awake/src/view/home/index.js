import React from 'react';
import { useSelector } from 'react-redux';


function Home(){
    return(
        <div>
            <h1>Você está na página inicial!</h1>
            <p>Email do usuário: {useSelector(state => state.usuarioEmail)} </p>
            <p>Situação: {useSelector(state => state.usuarioLogado)} </p>
        </div>
    );
}

export default Home;