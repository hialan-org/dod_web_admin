import React from 'react';
import renderer from 'react-test-renderer';
import {NavBar} from "../../src/components/AppBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {GoogleLoginButton} from "../../src/components/GoogleLoginButton";

const {act} = renderer;

describe('<NavBar />', () => {
    it('if user already login', async () => {
        let appBar;
        await act(async () => {appBar = renderer.create(
            <NavBar
                authenticated={true}
                isLoading={false}
            />)
        });
        expect(appBar.root.findAllByType(Nav.Link).length).toEqual(2);
        expect(appBar.root.findAllByType(GoogleLoginButton).length).toEqual(0);
    });
    it('if user not login yet', async () => {
        let appBar;
        await act(async () => {appBar = renderer.create(
            <NavBar
                authenticated={false}
                isLoading={false}
            />)
        });
        expect(appBar.root.findAllByType(Nav.Link).length).toEqual(1);
        expect(appBar.root.findAllByType(GoogleLoginButton).length).toEqual(1);
    });
})