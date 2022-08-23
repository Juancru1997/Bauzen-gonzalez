import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
    return (
    <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link to='/'>
                    <img src='/logo_bauzen.png' alt='imagen de bauzen' width='95'/>
                </Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link className="nav-link" to='/' >inicio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>contacto</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>productos</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar