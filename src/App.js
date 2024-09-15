import './css/App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import React from 'react';
import PersonasFetch from './services/PersonasFetch';
import PersonasPost from './services/PersonasPost';
import CitasFetch from './services/CitasFetch';
import CitasPost from './services/CitasPost';
import Inicio from './services/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='ccitas' element={<CitasPost/>} />
          <Route path='vcitas' element={<CitasFetch/>} />
          <Route path='vpersonas' element={<PersonasFetch/>} />
          <Route path='cpersona' element={<PersonasPost/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
