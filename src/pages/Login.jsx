import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {GoogleLoginButton} from "../components/GoogleLoginButton";
import {ACCESS_TOKEN, EMAIL, ROLE} from "../constants/data";
import {login} from "../utils/APIUtils";

function Login(props) {
    return (
        props.authenticated ?  (
            <Redirect push to="/"/>
        ) : (
            <div className="App">
                <GoogleLoginButton onClick={props.responseGoogle}/>
            </div>
        )
    );
}

export {Login}