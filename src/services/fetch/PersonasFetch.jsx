import { useState, useEffect } from "react"
import axios from 'axios'

const API_URL = "http://localhost:8081/personas"
const PersonasFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log('Ha ocurrido un error al consumir la API: ', error)
            })
    }, [])
    return (
        <div className="m-5">
            <h3>datos recolectados</h3>
            <div className="row w-100">
                {data.map(item => (
                    <div className="col-6">
                        <div className="mt-5 p-4 bg-light rounded-5 shadow">
                        <h4>identificacion: {item.identificacion}</h4>
                        <h4>Nombre: {item.nombre}</h4>
                        {item.apellido &&(
                            <h4>Apellido: {item.apellido}</h4>
                        )}
                        <h4>edad: {item.edad}</h4>
                        <h4>sexo: {item.sexo}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonasFetch