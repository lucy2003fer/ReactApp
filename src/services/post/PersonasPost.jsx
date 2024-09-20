import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8081/personas";

const PersonasPost = () => {
    const [identificacion, setIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formulario = {
            identificacion: identificacion,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            sexo: sexo
        };
        axios.post(API_URL, formulario)
            .then(response => {
                console.log("muy bien", response);
                navigate("/vpersonas");
            })
            .catch(error => {
                console.log("MUY MAL", error);
            });
    };

    return (
        <div className="m-5">
            <div className="bg-light p-5 rounded-5 shadow">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="identificacion">Identificación</label>
                    <input className="form-control" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />

                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />

                    <label htmlFor="apellido">Apellido</label>
                    <input className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"/>

                    <label htmlFor="edad">Edad</label>
                    <input className="form-control" value={edad} onChange={(e) => setEdad(e.target.value)} type="number"/>

                    <label htmlFor="sexo">Sexo</label>
                    <input className="form-control" value={sexo} onChange={(e) => setSexo(e.target.value)} type="text"/>
                    <button type='submit'>Guardar</button>
                </form>
                <a href="/"><button type="button">Salir</button></a>
            </div>
        </div>
    );
};

export default PersonasPost;
