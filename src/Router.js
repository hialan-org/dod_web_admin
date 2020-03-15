import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {ListUser} from "./pages/ListUser";
import {login} from "./utils/APIUtils";
import {ACCESS_TOKEN, EMAIL, ROLE} from "./constants/data";
import {NavBar} from "./components/AppBar";
import {NotFound} from "./pages/NotFound";

const Routes = () => {
    const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem(ACCESS_TOKEN));
    const [loading, setLoading] = useState(false);

    const responseGoogle = (response) => {
        setLoading(true);
        const access_token = response.getAuthResponse().access_token;
        login(access_token).then(result => {
            sessionStorage.setItem(ACCESS_TOKEN, access_token);
            sessionStorage.setItem(EMAIL, result.body.email);
            sessionStorage.setItem(ROLE, result.body.role);
            setLoading(false);
            setAuthenticated(true);
            console.log("Log in succeed!");
        }).catch(err => {
            setLoading(false);
            console.log("Log in failed!")
        });
    }

    const logout = () => {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(EMAIL);
        sessionStorage.removeItem(ROLE);
        setAuthenticated(false);
        console.log("Log out succeed!");
    }

    return (
        <>
            <Router>
                <div>
                    <NavBar authenticated={authenticated} loginGoogle={responseGoogle} logout={logout} isLoading={loading}/>
                    <Switch>
                        <Route path="/" exact component={() => <Homepage authenticated={authenticated} logout={logout}/>}/>
                        {/*<Route path="/login" exact*/}
                        {/*       component={() => <Login authenticated={authenticated} responseGoogle={responseGoogle}/>}/>*/}
                        <Route path="/users" exact component={() => <ListUser authenticated={authenticated}/>}/>
                        <Route path="/*" component={() => <NotFound/>} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export {Routes};