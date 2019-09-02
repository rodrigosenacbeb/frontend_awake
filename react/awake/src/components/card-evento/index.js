import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './card-evento.css';
import firebase from '../../config/firebase';

function EventoCard({id, img, titulo, detalhes, visualizacoes}){

    const [urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL()
        .then(url => setUrlImagem(url));
    },[urlImagem])

    return(
        <div className="col-md-3 col-sm-12">
            <img src={urlImagem} className="card-img-top img-cartao"/>
            <div className="card-body">
                <h5>{titulo.toUpperCase()}</h5>
                <p className="card-text text-justify">{detalhes}</p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={'/eventodetalhes/' + id} className="btn btn-sm btn-detalhes">
                            + detalhes
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <i className="fas fa-eye"></i> <span>{visualizacoes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventoCard;