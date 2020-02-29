import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Login} from "./pages/Login";
import {Homepage} from "./pages/Homepage";
import {ListUser} from "./pages/ListUser";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" exact component={Login} />
                <Route path="/users" exact component={ListUser} />
            </Switch>
        </Router>
    );
};

export {Routes};