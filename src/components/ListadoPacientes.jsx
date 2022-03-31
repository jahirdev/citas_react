
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
       { pacientes.length == 0 ? <h2 className="font-black text-3xl text-center">No hay pacientes</h2> : <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2> }
      <p className="text-xl mt-5 mb-9 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      
      { 
        pacientes.map(paciente =>  
          <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
        )
      }
    
      
    </div>
  )
}


export default ListadoPacientes