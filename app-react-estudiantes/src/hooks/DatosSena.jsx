import { useState,useEffect,useCallback } from "react"
import axios from "axios"

const DatosSena = () =>{
    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const URL = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/SENA-CTPI.matriculados.json"

    const fetchDatos = useCallback(async () =>{
        setCargando(true)
        setError(null)
        try{
            const response = await axios.get(URL)
            setDatos(response.data)
        }catch(E){
            setError("Error al cargar los datos..."+E)
        }finally{
            setCargando(false)
        }
    },[])
    useEffect(()=>{
        fetchDatos()
    },[fetchDatos])
    return {datos,cargando,error} 
}
export default DatosSena