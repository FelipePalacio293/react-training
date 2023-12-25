const Error = ({ mensaje }) => {
    return (
        <p className="font-bold bg-red-100 border-l-4 border-red-500 text-red-700 p-3 uppercase mb-5 text-center">
            {mensaje}
        </p> 
    )
}

export default Error