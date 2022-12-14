import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'


const ConfirmarCuenta = () => {

  const params = useParams()
  const { id } = params
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
       
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios(url)

        console.log(data)
        setAlerta({
          msg: data.msg,
          error: false
        })

        setCuentaConfirmada(true)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg, 
          error: true
        })
      }
    }

    confirmarCuenta()
  }, [])

  const { msg } = alerta;

  return (
    <>

      <h1 className="text-sky-600 p-2 font-black text-4xl md:text-6xl capitalize">Confirma tu cuenta y comienza a crear tus <span className="text-slate-700 ">proyectos</span> </h1>

      {msg && <Alerta alerta={alerta} />}

      {cuentaConfirmada && (
          <Link
            className="block text-center my-4 text-slate-500 uppercase text-sm"
            to="/registrar"
          > Inicia Session</Link>
          
      )}
    </>
  )
}

export default ConfirmarCuenta