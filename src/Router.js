import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Login} from "./pages/Login";
import {Homepage} from "./pages/Homepage";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>
    );
};

export {Routes};