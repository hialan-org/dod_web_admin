import React, {useEffect, useState} from 'react';
import {EMAIL} from "../constants/data";
import {getListUser, login} from "../utils/APIUtils";

function Homepage(props) {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(props.authenticated){
            setEmail(sessionStorage.getItem(EMAIL))
        }
    }, []);

    return (
        <div style={styles.screen}>
            <div style={styles.body}>
                <h1>Dog of The Dow Management</h1>
                {
                    props.authenticated ?
                        (
                            <>
                                <h2 style={styles.text}>User: {email}</h2>
                                <a href="#" onClick={props.logout}>Logout</a>
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
        color: 'snow',

    }
};

export {Homepage};