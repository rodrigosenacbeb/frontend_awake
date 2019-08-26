import React from 'react';
import Navbar from '../../components/navbar/';
import './evento-detalhes.css';
import {Link} from 'react-router-dom';

function EventoDetalhes(){
    return(
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <img src="https://via.placeholder.com/150x50" className="img-banner" alt="Banner" />
                    <div className="col-12  text-right mt-1 visualizacoes">
                        <i className="fas fa-eye"><span> 130</span></i>
                    </div>
                    <h3 className="mx-auto mt-5 titulo"><strong>Título</strong></h3>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">Festa</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">30/10/2019</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">21:00</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <dlv className="col-12 text-center titulo">
                        <h5><strong>Detalhes do Evento</strong></h5>
                    </dlv>
                    <div className="col-12 text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
           <Link to='' className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link> 
        </>
    )
}

export default EventoDetalhes;