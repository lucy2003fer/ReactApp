import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Personas = "http://localhost:8081/personas"
const API_URL = "http://localhost:8081/citas"
const CitasPost = () => {
    const [data, setData] = useState([]);
    const [consultorio, setConsultorio] = useState("")
    const [doctor, setDoctor] = useState("")
    const [persona, setPersona] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        const formulario = {
            consultorio: consultorio,
            doctor: doctor,
            persona: {
                id: persona
            }
        }
        axios.post(API_URL, formulario)
            .then(response => {
                console.log("bien", response.data)
                navigate("/vcitas")
            })
            .catch(error => {
                console.log("errrrrrror", error)
            })
    }

    useEffect(() => {
        axios.get(Personas)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log("Error cargando personas:", error)
            })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="consultorio">Consultorio</label>
                        <input type="number" value={consultorio} onChange={(e) => setConsultorio(parseInt(e.target.value))} />
                        <label htmlFor="doctor">Doctor</label>
                        <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
                        <select onChange={(e) => setPersona(parseInt(e.target.value))}>
                            <option>usuario</option>
                            {data.map(val => (
                                <option key={val.id} value={val.id}>{val.nombre}</option>
                            ))}
                        </select>
                        <button className='btn btn-success' type='submit'>Guardar</button>
                    </form>
                    <a href="/"><button type="submit">salir</button></a>
                </div>
            </div>
        </div>
    )
}
export default CitasPost