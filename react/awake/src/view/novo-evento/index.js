import React from 'react';
import Navbar from '../../components/navbar/';

function novoEvento(){
    return(
        <>
        <Navbar/>
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
            </div>

            <form>
                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Tipo Evento:</label>
                    <select className="form-control">
                        <option disabled selected value>--Selecione um Tipo--</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição do Evento:</label>
                    <textarea className="form-control" rows="3" />
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <label>Data:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Upload da Foto:</label>
                    <input type="file" className="form-control"/>
                </div>

                <button type="button" 
                className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">
                    Publicar Evento
                </button>
            </form>
        </div>
        </>
    )
}

export default novoEvento;