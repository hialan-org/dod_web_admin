import React, {useState} from 'react';
import {ACCESS_TOKEN, EMAIL} from "../constants/data";
import {login} from "../utils/APIUtils";

function Homepage() {
    const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem(ACCESS_TOKEN));
    const [email, setEmail] = useState(sessionStorage.getItem(EMAIL));

    const logout = () => {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(EMAIL);
        console.log("Log out succeed!");
    }

    console.log(sessionStorage.getItem(ACCESS_TOKEN));

    return (
        <div>
            <h1>Dog of The Down Management</h1>
            {
                authenticated ?
                    (
                        <>
                            <h2>User: {email}</h2>
                            <a onClick={logout}>Logout</a>
                        </>
                    ) :
                    (<a href="/login">Login</a>)
            }
        </div>
    );
}

export {Homepage};