import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import EventoCard from '../../components/card-evento/';
import firebase from '../../config/firebase';

/*Componentes Personalizados*/
import Navbar from '../../components/navbar/';

function Home(props){
    const listaeventos = [];
    const [eventos, setEventos] = useState();
    const [pesquisa, setPesquisa] = useState("");
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [tituloPagina, setTituloPagina] = useState();   

    
    useEffect(() => {
        if(props.match.params.parametro)
        {
            setTituloPagina('Meus Eventos')
            firebase.firestore().collection('eventos').where('usuario','==', usuarioEmail).get().then(async resultado => {            
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa.toLowerCase()) >= 0)
                    {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })            
                setEventos(listaeventos);        
            }); 
        }else{
            setTituloPagina('Eventos Publicados')
            firebase.firestore().collection('eventos').get().then(async resultado => {            
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa.toLowerCase()) >= 0)
                    {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })            
                setEventos(listaeventos);        
            });             
        }       
    });


    return(
        <>
        <Navbar />

        <div className="container">
        
            <div className="row my-3">
                <h3 className="mx-auto">{tituloPagina}</h3>                    
            </div>

            <div className="row mb-5">
                <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
            </div>

            <div className="row">
                {
                   eventos && eventos.map(item => <EventoCard 
                                                    key={item.id} 
                                                    id={item.id}
                                                    img={item.foto}
                                                    titulo={item.titulo}
                                                    detalhes={item.detalhes}
                                                    visualizacoes={item.visualizacoes}
                                                    />)                                
                }
            </div>
        </div>
        </>
    );
}

export default Home;