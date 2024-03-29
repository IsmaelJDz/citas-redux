import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaAction } from '../actions/citasActions';
import { validarFormularioAction } from '../actions/validarActions'
import uuid from 'uuid/v4'

const AgregarCita = () => {

  const [ mascota, guardaMascota ] = useState('');
  const [ propietario, guardaPropietario ] = useState('');
  const [ fecha, guardaFecha ] = useState('');
  const [ hora, guardaHora ] = useState('');
  const [ sintomas, guardaSintomas ] = useState('')

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();
  const agregarNuevaCita = (cita) => dispatch( agregarCitaAction(cita) )
  const validarFormulario = (estado) => dispatch( validarFormularioAction(estado) )

  //useSelector es similar a mapStateToProps en Hooks
  const error = useSelector( (state) => state.error );

  const handleNuevaCita = (e) => {
    e.preventDefault()

    //Validar formulario
    if(mascota.trim() === '' ||  propietario.trim() === '' || sintomas.trim() === '') {
        validarFormulario(true);
        return;
    }

    validarFormulario(false);

    agregarNuevaCita({
      id: uuid(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas,
    })

    //Reiniciar el formulario
    guardaMascota('');
    guardaPropietario('');
    guardaFecha('');
    guardaHora('');
    guardaSintomas('');

    //Otra forma de enviar los datos al dispatch
    //dispatch( agregarCitaAction({ id: uuid(), mascota, propietario, fecha, hora, sintomas }) )

  }

  return (
    <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={handleNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Mascota"
                                value={mascota}
                                onChange={ e => guardaMascota(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                value={propietario}
                                onChange={ e => guardaPropietario(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={fecha}
                                onChange={ e => guardaFecha(e.target.value)} 
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                value={hora}
                                onChange={ e => guardaHora(e.target.value)}  
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={sintomas}
                                onChange={ e => guardaSintomas(e.target.value)} 
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
               { error.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null }
            </div>
    </div>
  )
}

export default AgregarCita
