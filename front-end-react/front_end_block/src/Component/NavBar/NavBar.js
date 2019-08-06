import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import React from "react";
import {Link} from 'react-router-dom';

export const NavBar =  () =>{

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <h4>Applicazione di prova</h4>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <Link to={'/'}>Home</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to={'/second'}>Contatti</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}