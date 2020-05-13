import React, {useEffect, useState} from 'react';
import {EMAIL} from "../constants/data";
import {getListUser, login} from "../utils/APIUtils";

import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function Homepage(props) {
    const [email, setEmail] = useState("");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        if(props.authenticated){
            setEmail(sessionStorage.getItem(EMAIL))
        }
    }, []);

    return (
        <div style={styles.screen}>
            <div style={styles.body}>
                <div style={{paddingBottom:30}}>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <button onClick={() => i18n.changeLanguage('es')}>es</button>
                <button onClick={() => i18n.changeLanguage('pt')}>pt</button>
                </div>

                <h1 style={{textAlign:"center"}}>{t("Dog of The Dow Management")}</h1>
                {
                    props.authenticated ?
                        (
                            <>
                                <div style={{textAlign:"center"}}>
                                <h2 style={styles.text}>{t("User")}: {email}</h2>
                                <a href="#" onClick={props.logout}>{t("Logout")}</a>
                                </div>
                            </>
                        ) : ""
                }
            </div>

        </div>
    );
}

const styles = {
    screen : {
        display: "flex",
        height: '100vh',
        backgroundColor:"rgb(53,58,63)"
    },
    body : {
        flex:1,
        padding:10,
        paddingLeft:30,
        margin:10,
        color: 'snow',

    }
};

export {Homepage};