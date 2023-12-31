import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">
          Listado de pacientes 
        </h2>
        <p className="text-center mt-5 text-lg">
          Administra tus {' '}
          <span className="text-indigo-600 font-bold">
            pacientes y citas
          </span>
        </p>

        <Paciente />        
    </div>
  )
}

export default ListadoPacientes
