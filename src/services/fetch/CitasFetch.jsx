import { useState, useEffect } from "react"
import axios from "axios"

const Doctores = "http://localhost:8081/doctores"
const Personas = "http://localhost:8081/personas"
const API_URL = "http://localhost:8081/citas"

const CitasFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL, Personas, Doctores)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h3>Citas</h3>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h4>Consultorio: {item.consultorio}</h4>
                        <h5>
                            Doctor: {item.doctores ? item.doctores.nombre : "Sin asignar"}
                        </h5>
                        <h5>
                            Para: {item.persona ? item.persona.nombre : "Sin asignar"}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitasFetch