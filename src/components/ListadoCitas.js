import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citasActions';

const ListadoCitas = () => {

  //obtener las citas del state
  const citas = useSelector((state) => state.citas);

  //mensaje condicional
  const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí'

  //dispatch para mandar a llamar la accion de eliminar
  const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{ mensaje }</h2>
        <div className="lista-citas">
          { citas.citas.map(cita => (
            <div className="media mt-3" key={cita.id}>
              <div className="media-body">
                  <h3 className="mt-0">{ cita.mascota }</h3>
                  <p className="card-text"><span>Nombre Dueño:</span>{ cita.propietario }</p>
                  <p className="card-text"><span>Fecha:</span>{ cita.fecha }</p>
                  <p className="card-text"><span>Hora:</span>{ cita.hora }</p>
                  <p className="card-text"><span>Sintomas:</span>{ cita.sintomas } <br /> </p>
                  <button 
                      className="btn btn-danger"
                      onClick={() => dispatch(borrarCitaAction(cita.id))}
                      >Borrar &times;
                  </button>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default ListadoCitas;
