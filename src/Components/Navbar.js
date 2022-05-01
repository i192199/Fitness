import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    const [Mode, SetMode] = useState('dark');
    const [TextMode, SetTextMode] = useState('light');

    const toggleMode = () =>{
        if(Mode ==  'light'){
            SetMode('dark')
        }
        else{
            SetMode('light')
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`} >
                <div className="container-fluid" >
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class={`form-check form-switch text-${TextMode}`} onClick={toggleMode}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "TextUtils",
}
