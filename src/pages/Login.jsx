import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {GoogleLoginButton} from "../components/GoogleLoginButton";
import {ACCESS_TOKEN, EMAIL} from "../constants/data";

function Login() {
    const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem(ACCESS_TOKEN));
    const [email, setEmail] = useState(sessionStorage.getItem(EMAIL));
    return (
        authenticated ?  (
            <Redirect push to="/"/>
        ) : (
            <div className="App">
                <GoogleLoginButton/>
            </div>
        )
    );
}

export {Login}