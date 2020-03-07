import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {GoogleLoginButton} from "./GoogleLoginButton";


function NavBar(props) {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">DoD Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {props.authenticated && (<Nav.Link href="/users">Users</Nav.Link>)}
                </Nav>
                <Nav>
                    {props.authenticated
                        ? (<a href="#" onClick={props.logout}>Logout</a>)
                        : (<GoogleLoginButton onClick={props.loginGoogle}/>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export {NavBar}