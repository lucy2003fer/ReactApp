import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Doctores = "http://localhost:8081/doctores"
const Personas = "http://localhost:8081/personas"
const API_URL = "http://localhost:8081/citas"

const CitasPost = () => {
    const [dataPersonas, setDataPersonas] = useState([])
    const [dataDoctores, setDataDoctores] = useState([])
    const [consultorio, setConsultorio] = useState("")
    const [persona, setPersona] = useState("")
    const [doctores, setDoctores] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const formulario = {
            consultorio: consultorio,
            doctores: {
                id: doctores
            },
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
                setDataPersonas(response.data)
            })
            .catch(error => {
                console.log("Error cargando personas:", error)
            })

        axios.get(Doctores)
            .then(response => {
                setDataDoctores(response.data)
            })
            .catch(error => {
                console.log("Error cargando doctores:", error)
            })
    }, [])

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="consultorio">Consultorio</label>
                    <input  type="number"  value={consultorio} onChange={(e) => setConsultorio(e.target.value)} />
                    
                    <label htmlFor="persona">Persona</label>
                    <select value={persona} onChange={(e) => setPersona(e.target.value)}>
                        <option value="">Seleccionar usuario</option>
                        {dataPersonas.map(val => (
                            <option key={val.id} value={val.id}>{val.nombre}</option>
                        ))}
                    </select>

                    <label htmlFor="doctores">Doctor</label>
                    <select value={doctores} onChange={(e) => setDoctores(e.target.value)}>
                        <option value="">Seleccionar doctor</option>
                        {dataDoctores.map(val => (
                            <option key={val.id} value={val.id}>{val.nombre}</option>
                        ))}
                    </select>

                    <button className='btn btn-success' type='submit'>Guardar</button>
                </form>
                <a href="/"><button type="button">Salir</button></a>
            </div>
        </div>
    )
}

export default CitasPost
