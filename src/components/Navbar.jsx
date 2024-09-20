import React from 'react'
import '../css/Inicio.css'
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='w-100 container-fluid bg-danger d-flex align-items-center py-2'>
      <div className='me-auto d-flex align-items-center'>
        <img src={logo} alt="" className='img' />
      </div>
      <div className='d-flex align-items-center'>
        <input className='rounded-4' placeholder='Buscar...'/>
      </div>
    </div>
  )
}
export default Navbar