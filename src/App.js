import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import Logo from "./assets/logo.svg"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Climate change
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Meteo</Nav.Link>
              <Nav.Link as={Link} to="/climate-change">How is the world changing?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
