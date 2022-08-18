import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to='/'>
                    <img src='/logo_bauzen.png' width='95'/>
                </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to='/' >inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/contacto'>contacto</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/productos'>productos</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
    )
}

export default navbar