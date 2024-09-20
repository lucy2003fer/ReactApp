import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const API_URL = "http://localhost:8081/doctores"
const DoctoresPost = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [profesion, setProfesion] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        const formulario = {
            nombre: nombre,
            apellido: apellido,
            profesion: profesion
        }
        axios.post(API_URL, formulario)
            .then(response => {
                console.log("muy bien", response)
                navigate("/vdoctores")
            })
            .catch(error => {
                console.log("MUY MAL", error)
            })
    }


    return (
        <div className="m-5">
            <div className="bg-light p-5 rounded-5 shadow">
                <div onSubmit={handleSubmit}>
                    <form>
                        <label htmlFor="nombre">NOMBRE</label>
                        <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
                        <label htmlFor="apellido">apellido</label>
                        <input className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" />
                        <label htmlFor="profesion">profesion</label>
                        <input className="form-control" value={profesion} onChange={(e) => setProfesion(e.target.value)} type="text" />
                        <button type='submit'>GUARDAR</button>
                    </form>
                    <a href="/"><button type="submit">salir</button></a>
                </div>
            </div>
        </div>
    )

}

export default DoctoresPost