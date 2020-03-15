import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import {GoogleLoginButton} from "../components/GoogleLoginButton";
import {ACCESS_TOKEN, EMAIL, ROLE} from "../constants/data";
import {login} from "../utils/APIUtils";
import Spinner from "react-bootstrap/Spinner";

function Login(props) {
    return (
        props.authenticated ?  (
            <Redirect push to="/"/>
        ) : (
            <>
                {props.isLoading ? <Spinner animation="border" /> : ""}
                <div className="App">
                    <GoogleLoginButton onClick={props.responseGoogle}/>
                </div>
            </>
        )
    );
}

export {Login}