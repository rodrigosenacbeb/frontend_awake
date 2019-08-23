import React from 'react';
import { useSelector } from 'react-redux';
import EventoCard from '../../components/card-evento/';

/*Componentes Personalizados*/
import Navbar from '../../components/navbar/';

function Home(){
    return(
        <>
        <Navbar />

        <div className="container">
        
            <div className="row my-3">
                <h3 className="mx-auto">Eventos Publicados</h3>                    
            </div>

            <div className="row mb-5">
                <input type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
            </div>

            <div className="row">
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />        
                <EventoCard />            
            </div>
        </div>
        </>
    );
}

export default Home;