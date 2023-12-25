import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente }) {
    const [propieatario, setPropieatario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [nombre, setNombre] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if( Object.keys(paciente).length > 0 ) {
            setPropieatario(paciente.propieatario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setNombre(paciente.nombre);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        return Date.now() + Math.random().toString(36).substring(2);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if( [propieatario, email, fecha, nombre, sintomas].includes('') ) {
            setError(true);
            return;
        }
        setError(false);
        setPacientes([...pacientes, { id: generarId(), propieatario, email, fecha, nombre, sintomas }]);

        setPropieatario('');
        setEmail('');
        setFecha('');
        setNombre('');
        setSintomas('');
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 my-10">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="mt-5 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5" 
                onSubmit={handleSubmit}
            >
                { error && <Error mensaje="Todos los campos son obligatorios" /> 
                }
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre mascotas</label>
                    <input 
                        type="text" 
                        placeholder="Nombre mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Propietario</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                        value={propieatario}
                        onChange={e => setPropieatario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        type="email" 
                        placeholder="Email propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <input 
                        type="date" 
                        placeholder="Fecha de alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomass</label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Agregar Paciente"
                    className="bg-indigo-600 w-full mt-5 p-3 text-white uppercase font-bold hover:bg-indigo-900 hover:cursor-pointer transition-all"
                />
            </form>
            
        </div>
    )
}

export default Formulario