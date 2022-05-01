import React from 'react';
import '../CSS/style_login.css';

export default function SignUp(props) {

    return (
        <>
            <div id='bg'></div>
            <div className="signup-box">
                <form >
                    <h1 style={{ color: "Green",  margin : '20px' }}>Sign Up</h1>
                    <label style={{ color: "red", fontWeight: "bold" }}>First Name</label>
                    <input type="text" placeholder="" />
                    <label style={{ color: "red" }}>Last Name</label>
                    <input type="text" placeholder="" />
                    <label style={{ color: "red" }}>Email</label>
                    <input type="email" placeholder="" />
                    <label style={{ color: "red" }}>Password</label>
                    <input type="password" placeholder="" />
                    <label style={{ color: "red" }}>Confirm Password</label>
                    <input type="password" placeholder="" /><br></br>
                    <button type="submit" className="btn" value="Submit">Submit</button>
                    <div id="create-account-wrap">
                        Already a member? <a href="/Sign_up" >Login </a>
                    </div>
                </form>
            </div>
            {/* <p class="para-2">
                Already have an account? <a href="login.html">Login here</a>
            </p> */}

        </>
    )
}

