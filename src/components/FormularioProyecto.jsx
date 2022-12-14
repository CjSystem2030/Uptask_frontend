import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"



const FormularioProyecto = () => {

    const [ nombre, setNombre ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ fechaEntrega, setFechaEntrega ] = useState('')
    const [ cliente, setCliente ] = useState('')

    const { mostrarAlerta, alerta, submitProyecto } = useProyectos();

    const handleSubmit = e => {
        e.preventDefault();
        
        if([nombre, descripcion, fechaEntrega, cliente].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        submitProyecto({nombre, descripcion, fechaEntrega, cliente})

        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')

    }

    const { msg } = alerta

  return (
    <form 
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow-md">
        
        { msg && <Alerta alerta={alerta}/>}

        <div className='mb-5 mt-5'>
            <label
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold text-sm"
            >   
                Nombre Proyecto
            </label>

            <input 
                id="nombre"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400" 
                placeholder="Nombre del Proyecto"
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
                htmlFor="descripcion"
                className="text-gray-700 uppercase font-bold text-sm"
            >   
                Descripcion
            </label>

            <textarea 
                id="descripcion"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400" 
                placeholder="Descripcion del Proyecto"
                value={descripcion}
                onChange={ e => setDescripcion(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
                htmlFor="fecha-entrega"
                className="text-gray-700 uppercase font-bold text-sm"
            >   
                Fecha de Entrega
            </label>

            <input 
                id="fecha-entrega"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400" 
                
                value={fechaEntrega}
                onChange={ e => setFechaEntrega(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label
                htmlFor="cliente"
                className="text-gray-700 uppercase font-bold text-sm"
            >   
                Nombre Cliente
            </label>

            <input 
                id="cliente"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400" 
                placeholder="Nombre del Proyecto"
                value={cliente}
                onChange={ e => setCliente(e.target.value)}
            />
        </div>

        <input 
            type="submit" 
            value="Crear Proyecto"
            className='bg-sky-600 w-full p-3 rounded uppercase font-bold text-white hover:bg-sky-700 transition-colors' 
        />

    </form>
  )
}

export default FormularioProyecto