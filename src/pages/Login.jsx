import React, {useState} from 'react';
import {GoogleLoginButton} from "../components/GoogleLoginButton";
import {ACCESS_TOKEN, EMAIL} from "../constants/data";

function Login() {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(ACCESS_TOKEN)!=='');
    const [email, setEmail] = useState(localStorage.getItem(EMAIL));
    console.log(email);
    console.log()
    return (
        authenticated ?  (
            <h2>User: {email}</h2>
        ) : (
            <div className="App">
                <GoogleLoginButton/>
            </div>
        )
    );
}

export {Login}