import React from 'react';
import GoogleLogin from "react-google-login";

function GoogleLoginButton(props) {

    return (
        <GoogleLogin
            clientId="152090196286-pkjcq0hb22e0s6c89skktrvqscjo1ok5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={props.onClick}
            onFailure={props.onClick}
            cookiePolicy='single_host_origin'
            responseType='token'
        />
    )
}

export {GoogleLoginButton};