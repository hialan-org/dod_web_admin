import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from "../../src/pages/Login";

import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {GoogleLoginButton} from "../../src/components/GoogleLoginButton";
import { BrowserRouter as Router } from 'react-router-dom';

const {act} = renderer;

describe('<Login />', () => {
    it('if user already authenticated', async () => {
        let login;
        await act(async () => {login = renderer.create(
            <Router>
                <Login
                    authenticated={true}
                    isLoading={false}
                />
            </Router>)
        });
        expect(login.root.findByType(Redirect));
    });
    it('if user is not authenticated', async () => {
        let login;
        await act(async () => {login = renderer.create(
            <Login
                authenticated={false}
                isLoading={false}
            />)
        });
        expect(login.root.findByType(GoogleLoginButton));
    });
    it('if it is loading', async () => {
        let login;
        await act(async () => {login = renderer.create(
            <Login
                authenticated={false}
                isLoading={true}
            />)
        });
        expect(login.root.findByType(Spinner));
    });
})