import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {

    let Location = useLocation();
    // useEffect(() => {
      
    // }, [Location])
    
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand text-light" to="/">{props.title}</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className={`nav-link  ${Location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className={`nav-link  ${Location.pathname === '/account' ? 'active' : ''}`} to="/account">Account</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link disabled">Premium Features</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-light" type="submit">Find</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
