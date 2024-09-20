import './css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import PersonasFetch from './services/fetch/PersonasFetch'
import PersonasPost from './services/post/PersonasPost'
import PersonasPut from './services/put/PersonasPut'
import CitasFetch from './services/fetch/CitasFetch'
import CitasPost from './services/post/CitasPost'
import CitasPut from './services/put/CitasPut'
import DoctoresFetch from './services/fetch/DoctoresFetch'
import DoctoresPost from './services/post/DoctoresPost'
import DoctoresPut from './services/put/DoctoresPut'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <div className=''>
        <Navbar/>
        <div className='content d-flex'>
          <Sidebar/>
          <Routes>
            <Route path='ccitas' element={<CitasPost/>} />
            <Route path='vcitas' element={<CitasFetch/>} />
            <Route path='vpersonas' element={<PersonasFetch/>} />
            <Route path='cpersona' element={<PersonasPost/>} />
            <Route path='pcitas' element={<CitasPut/>} /> 
            <Route path='ppersonas' element={<PersonasPut/>} /> 
            <Route path='vdoctores' element={<DoctoresFetch/>} /> 
            <Route path='cdoctores' element={<DoctoresPost/>} /> 
            <Route path='pdoctores' element={<DoctoresPut/>} /> 
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App