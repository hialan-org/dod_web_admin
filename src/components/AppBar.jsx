import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {GoogleLoginButton} from "./GoogleLoginButton";
import Spinner from "react-bootstrap/Spinner";

import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function NavBar(props) {
    const { t, i18n } = useTranslation();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">DoD Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">{t("Home")}</Nav.Link>
                    {props.authenticated && (<Nav.Link href="/users">{t("Users")}</Nav.Link>)}
                </Nav>
                <Nav>
                    {props.isLoading ? <Spinner animation="border" size="sm"/> : ""}
                    {props.authenticated
                        ? (<a href="#" onClick={props.logout} style={{backgroundColor:"Snow", padding:5}}>{t("Logout")}</a>)
                        : (<GoogleLoginButton onClick={props.loginGoogle}/>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export {NavBar}