import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Doctores = "http://localhost:8081/doctores";
const Personas = "http://localhost:8081/personas";
const API_URL = "http://localhost:8081/citas";

const CitasPut = () => {
    const [dataPersonas, setDataPersonas] = useState([]);
    const [dataDoctores, setDataDoctores] = useState([]);
    const [consultorio, setConsultorio] = useState("");
    const [doctores, setDoctores] = useState("");
    const [persona, setPersona] = useState("");
    const [citaId, setCitaId] = useState("")

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
        axios.put(API_URL, formulario)
            .then(response => {
                console.log("bien", response.data);
                navigate("/vcitas");
            })
            .catch(error => {
                console.log("errrrrrror", error);
            })
    }

    useEffect(() => {
        axios.get(Personas)
            .then(response => {
                setDataPersonas(response.data);
            })
            .catch(error => {
                console.log("Error cargando personas:", error);
            })

        axios.get(Doctores)
            .then(response => {
                setDataDoctores(response.data);
            })
            .catch(error => {
                console.log("Error cargando doctores:", error);
            })
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="citaId">ID de Cita</label>
                    <input type="text" id="citaId" value={citaId} onChange={(e) => setCitaId(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="consultorio">Consultorio</label>
                    <input type="number" id="consultorio" value={consultorio} onChange={(e) => setConsultorio(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="doctores">Doctores</label>
                    <select id="doctores" value={doctores} onChange={(e) => setDoctores(e.target.value)}>
                        <option value="">Seleccione un doctor</option>
                        {dataDoctores.map(val => (
                            <option key={val.id} value={val.id}>{val.nombre}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="persona">Persona</label>
                    <select id="persona" value={persona} onChange={(e) => setPersona(e.target.value)}>
                        <option value="">Seleccione un usuario</option>
                        {dataPersonas.map(val => (
                            <option key={val.id} value={val.id}>{val.nombre}</option>
                        ))}
                    </select>
                </div>
                <button className='btn btn-success' type='submit'>Actualizar</button>
            </form>
            <a href="/"><button>Salir</button></a>
        </div>
    );
};

export default CitasPut;
