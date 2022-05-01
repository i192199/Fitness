import React, { useState } from 'react';
import logo from '../Images/Fitness_logo.jpg';
import style from '../CSS/style.module.css';

export default function Navbar2(props) {
    const [Mode, SetMode] = useState('dark');
    const [TextMode, SetTextMode] = useState('light');

    var APP_LOGO = document.getElementById("app-logo");
    if (APP_LOGO != null){
        console.log("IN ");
        APP_LOGO.style.top = "300px";
        APP_LOGO.style.left = "400px";
    }
    const toggleMode = () => {
        if (Mode == 'light') {
            SetMode('dark')
        }
        else {
            SetMode('light')
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`} >
                <div className="container-fluid" >
                    <a className={style.logo} href="#">{props.title}</a>
                    <div id='app-logo'>
                        <img src={logo} alt="APP LOGO" width='200' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`form-check form-switch text-${TextMode}`} onClick={toggleMode}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>

    )
}

