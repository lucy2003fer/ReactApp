import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8081/personas";

const PersonasPut = () => {
    const [identificacion, setIdentificacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [personaId, setPersonaId] = useState(""); // Para almacenar el ID de la persona que se actualizará
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("Error al cargar las personas:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formulario = {
            identificacion:identificacion,
            nombre: nombre,
            apellido: apellido,
            edad:edad,
            sexo:sexo
        };

        axios.put(`${API_URL}/${personaId}`, formulario)
            .then(response => {
                console.log("Actualización exitosa", response);
                navigate("/vpersonas"); // Redireccionar a la vista de personas
            })
            .catch(error => {
                console.log("Error al actualizar:", error);
            })
    }

    return (
        <div className="m-5">
            <div className="bg-light p-5 rounded-5 shadow">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="personaId">Selecciona una persona</label>
                    <select className="form-control" id="personaId" value={personaId} onChange={(e) => setPersonaId(e.target.value)}>
                        <option value="">Seleccione una persona</option>
                        {data.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.nombre} {item.apellido}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="identificacion">identificacion</label>
                    <input className="form-control" value={identificacion} onChange={(e) => setIdentificacion(parseInt(e.target.value))} type="number" />

                    <label htmlFor="nombre">NOMBRE</label>
                    <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />

                    <label htmlFor="apellido">APELLIDO</label>
                    <input className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" />

                    <label htmlFor="edad">edad</label>
                    <input className="form-control" value={edad} onChange={(e) => setEdad(parseInt(e.target.value))} type="number" />

                    <label htmlFor="sexo">sexo</label>
                    <input className="form-control" value={sexo} onChange={(e) => setSexo(parseInt(e.target.value))} type="text" />

                    <button type="submit" className="btn btn-success">ACTUALIZAR</button>
                </form>
                <a href="/"><button type="button" className="btn btn-secondary mt-3">SALIR</button></a>
            </div>
        </div>
    );
};

export default PersonasPut;
