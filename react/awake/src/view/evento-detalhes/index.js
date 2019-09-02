import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/';
import './evento-detalhes.css';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';

function EventoDetalhes(props){
    const [evento, setEvento] = useState({});
    const [urlImg, setUrlImg] = useState();
    const [carregando, setCarregando] = useState(1);
    const usuarioLogado = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        if(carregando){
        firebase.firestore().collection('eventos').doc(props.match.params.id).get()
        .then(resultado => {
            setEvento(resultado.data())
            firebase.firestore().collection('eventos').doc(props.match.params.id)
            .update('visualizacoes', resultado.data().visualizacoes + 1)
            firebase.storage().ref(`imagens/${resultado.data().foto}`).getDownloadURL()
            .then(url => {
                setUrlImg(url)
                setCarregando(0);
            })
        })        
        }else{
            firebase.storage().ref(`imagens/${evento.foto}`).getDownloadURL()
            .then(url => setUrlImg(url))
        }
    },[])

    return(
        <>
            <Navbar/>
            <div className="container-fluid">

                {
                carregando ? <div className="row mt-5">
                <div class="spinner-border text-danger mx-auto" role="status">
                <span class="sr-only"></span></div></div>
                :
                <div>

                <div className="row">
                    <img src={urlImg    } className="img-banner" alt="Banner" />
                    <div className="col-12  text-right mt-1 visualizacoes">
                        <i className="fas fa-eye"><span> {evento.visualizacoes + 1}</span></i>
                    </div>
                    <h3 className="mx-auto mt-5 titulo"><strong>{evento.titulo}</strong></h3>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">{evento.tipo}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">{evento.data}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">{evento.hora}</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <dlv className="col-12 text-center titulo">
                        <h5><strong>Detalhes do Evento</strong></h5>
                    </dlv>
                    <div className="col-12 text-center">
                        <p>{evento.detalhes}</p>
                    </div>
                </div>

            </div>
            }
            </div>

            {
            usuarioLogado === evento.usuario ?
            <Link to='' className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link> 
            : null
            }
        </>
    )
}

export default EventoDetalhes;