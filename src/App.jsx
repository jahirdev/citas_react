import {useState, useEffect} from "react";
import Header from "./components/Header";
import  Formulario  from "./components/Formulario";
import  ListadoPacientes  from "./components/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [error, setError] = useState(false);

  useEffect(()=> {
    ///if(Object.keys(pacientes).length > 0) {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLocalStorage);
    
  },[])

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  },[pacientes])

  const eliminarPaciente = (id)=> {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>

        <div className="mt-12 md:flex">
            <Formulario
                pacientes={pacientes}
                setPacientes={setPacientes}
                error={error}
                setError={setError}
                paciente={paciente}
                setPaciente={setPaciente} />
            <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
        </div>
    </div>
  )
}

export default App