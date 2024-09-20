import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8081/doctores";

const DoctoresPut = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [profesion, setProfesion] = useState("");
    const [doctoresId, setDoctoresId] = useState("");
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
        const formulario = {
            nombre: nombre,
            apellido: apellido,
            profesion: profesion
        };

        axios.put(`${API_URL}/${doctoresId}`,formulario)
            .then(response => {
                console.log("Actualización exitosa", response);
                navigate("/vdoctores");
            })
            .catch(error => {
                console.log("Error al actualizar:", error);
            })
    }

    return (
        <div className="m-5">
            <div className="bg-light p-5 rounded-5 shadow">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="doctoresId">Selecciona un doctor</label>
                    <select className="form-control" id="doctorId" value={doctoresId} onChange={(e) => setDoctoresId(e.target.value)}>
                        <option value="">Seleccione un doctor</option>
                        {data.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.nombre} {item.apellido}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="nombre">NOMBRE</label>
                    <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />

                    <label htmlFor="apellido">APELLIDO</label>
                    <input className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" />

                    <label htmlFor="profesion">profesion</label>
                    <input className="form-control" value={profesion} onChange={(e) => setProfesion(e.target.value)} type="text" />

                    <button type="submit" className="btn btn-success">ACTUALIZAR</button>
                </form>
                <a href="/"><button type="button" className="btn btn-secondary mt-3">SALIR</button></a>
            </div>
        </div>
    );
};

export default DoctoresPut;