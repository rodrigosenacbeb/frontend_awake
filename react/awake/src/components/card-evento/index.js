import React from 'react';
import {Link} from 'react-router-dom';
import './card-evento.css';

function EventoCard(){
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/150x50" className="card-img-top img-cartao"/>
            <div className="card-body">
                <h5>Titulo</h5>
                <p className="card-text text-justify">Detalhes</p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={'/eventosdetalhes'} className="btn btn-sm btn-detalhes">
                            + detalhes
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <i className="fas fa-eye"></i> <span>2019</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventoCard;