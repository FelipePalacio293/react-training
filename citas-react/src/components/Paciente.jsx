function Paciente({ paciente, setPaciente }) {
    return (
        <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{ paciente.nombre }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{ paciente.propietario }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
                <span className="font-normal normal-case">{ paciente.email }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">{ paciente.fecha }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{ paciente.sintomas }
                </span>
            </p>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="py-2 px-10 bg-blue-500 hover:bg-blue-700 text-white uppercase font-bold rounded"
                    onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white uppercase font-bold rounded"
                >
                    Eliminar &times;
                </button>

            </div>
        </div>
    )
}

export default Paciente