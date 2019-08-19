import React from 'react';
import { useSelector } from 'react-redux';

/*Componentes Personalizados*/
import Navbar from '../../components/navbar/';

function Home(){
    return(
        <>
            <Navbar />
            <h1>Você está na página inicial!</h1>
            <p>Email do usuário: {useSelector(state => state.usuarioEmail)} </p>
            <p>Situação: {useSelector(state => state.usuarioLogado)} </p>
        </>
    );
}

export default Home;