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
        <div>
            <h1>Dog of The Down Management</h1>
            {
                props.authenticated ?
                    (
                        <>
                            <h2>User: {email}</h2>
                            <a href="#" onClick={props.logout}>Logout</a>
                        </>
                    ) : ""
            }
        </div>
    );
}

export {Homepage};