import React from 'react'
import "./style.css"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../FirebaseConfig';
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const signIn = async () => {
        const user = await signInWithPopup(auth, provider);
        navigate("/addpatient");

    }
    return (
        <div className='Background'>
            <div className="Container">
                <p>Sign in with Google</p>
                <button onClick={signIn} className="signInBtn">Sign In</button>
            </div>
        </div>
    )
}

export default Login
