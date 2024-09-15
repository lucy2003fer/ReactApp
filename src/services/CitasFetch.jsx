import { useState, useEffect } from "react"
import axios from 'axios'

const API_URL = "http://localhost:8081/citas"

const CitasFetch = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(API_URL)
        .then(response => {
            setData(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return(
        <div>
            <h3>Citas</h3>
            <div>
                {data.map(item=>(
                    <div key={item.id}>
                        <h4>Consultorio: {item.consultorio}</h4>
                        <h5>Doctor: {item.doctor}</h5>
                        <h5>para: {item.persona.nombre}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CitasFetch