import React from 'react';
import GoogleLogin from "react-google-login";
import {ACCESS_TOKEN, EMAIL} from "../constants/data";
import {login} from "../utils/APIUtils";

function GoogleLoginButton() {

    const responseGoogle = (response) => {
        const profile = response.getBasicProfile();
        const access_token = response.getAuthResponse().access_token;
        login(access_token).then(result => {
            sessionStorage.setItem(ACCESS_TOKEN, access_token);
            sessionStorage.setItem(EMAIL, profile.getEmail());
            console.log("Log in succeed!");
        }).catch(err => {
            console.log("Log in failed!")
        });
    }

    return (
        <GoogleLogin
            clientId="152090196286-ibs0uvkt05rh8tacju5ok99jjdv5e3q4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy='single_host_origin'
            responseType='token'
        />
    )
}

export {GoogleLoginButton};