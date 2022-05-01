import React, { useState } from 'react';
import '../CSS/style_login.css';
import Home from './Home';

export default function Login(props) {
    const [profile, setProfile] = useState(false);
    return (
        // { profile?(<Home/>) : (
            <><div id="bg"></div>

            <form>
                <h1 style={{ color: "Green", margin: '100px' }}>Login</h1>
                <div className="form-field">
                    <input type="email" placeholder="Email / Username" required />
                </div>

                <div className="form-field">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="form-field">
                    <button className="btn" type="submit" onClick={e => setProfile(true)}>Log in</button>
                </div>
                <div id="create-account-wrap">
                    Not a member? <a href="/Sign_up" >Create Account</a>
                </div>
            </form>
            </>
            // )
// }
    )
}

