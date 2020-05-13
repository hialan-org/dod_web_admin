import React from 'react';
import GoogleLogin from "react-google-login";

import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function GoogleLoginButton(props) {

    const { t, i18n } = useTranslation();

    return (
        <GoogleLogin
            clientId="152090196286-pkjcq0hb22e0s6c89skktrvqscjo1ok5.apps.googleusercontent.com"
            buttonText={t("Login")}
            onSuccess={props.onClick}
            onFailure={props.onClick}
            cookiePolicy='single_host_origin'
            responseType='token'
        />
    )
}

export {GoogleLoginButton};