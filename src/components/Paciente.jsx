const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {

  const handleEliminarPaciente = (id) => {
    console.log('eliminar paciente con id: ', id);
    if(confirm('Esta seguro de borrar el registro?')) {
      eliminarPaciente(id);
    }
  }
  return (
    <div className="m-3 bg-white shadow-md p-4 px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">{paciente.fechaAlta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case text-justify">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg"
                    onClick={()=> setPaciente(paciente)}>
              Editar
            </button>
            <button type="button" className="py-2 px-10 text-white bg-red-600 hover:bg-red-700 cursor-pointer rounded-lg" onClick={() => handleEliminarPaciente(paciente.id)}>
              Eliminar
            </button>
        </div>
      </div>
  )
}

export default Paciente