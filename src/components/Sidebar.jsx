//moriré  
// primero me ayuda, please, jajaj mentiris
//:(
import { Link } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle"
import "../css/sidebar.css"
export default function Sidebar(){
    return(
        <div className='d-flex'>
            <div id='sidebar' className='sidebar shadow min-vh-100 collapse collapse-horizontal show'>
                <div className='sidebarin'>
                    <div>
                        <div className='my-3 d-flex justify-content-center'>
                            <Link to="/ccitas"><button className='btn btn-danger'>Crear Cita</button></Link>
                        </div>
                        <div className='my-3 d-flex justify-content-center'>
                            <button className='btn btn-danger'>Crear Doctor</button>
                        </div>
                        <div className='my-3 d-flex justify-content-center'>
                            <button className='btn btn-danger'>Crear Paciente</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button data-bs-target="#sidebar" data-bs-toggle="collapse">Menú</button>
            </div>
        </div> // muy bonito :D
    )
}