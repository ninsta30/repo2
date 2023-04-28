import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.heading}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                   
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input class="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
