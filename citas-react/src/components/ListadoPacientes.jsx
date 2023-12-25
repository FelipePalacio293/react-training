import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {
    return (
        <div className="w-1/2 lg:w-3/5 mx-5 my-10 md:h-screen overflow-y-scroll">
            { pacientes.length && pacientes.length ? (
                <>  
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes</span>
                    </p>
                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))} 
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando {''}
                        <span className="text-indigo-600 font-bold">Pacientes</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes