import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="items text-anim">
                    <span style={{color:'orange'}}>Gym</span><span style={{color:'#0dd6b8'}}>Heros</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav  className="ms-auto text-center items">
                <NavLink className="items" to="/home">Home</NavLink>
                    {/* <NavLink  to="/">About</NavLink> */}
                    <NavLink className="items"  to="/services">Services</NavLink>
                    <NavLink className="items"  to="/trainers">Trainers</NavLink>

                    {/* {
                        user.email &&  <span className="items">{user.displayName}</span>
                    } */}
                     <span className="items">Hello {user.displayName}</span>

                    {/* {
                        user?.email ?
                        <button className="btn btn-secondary btn-sm fs-6 fw-bold me-2" onClick={logOut}>Logout</button>
                        :
                       <NavLink className="items" to="/login">Login</NavLink>
                    }
                     */}
                     <button className="btn btn-secondary btn-sm fs-6 fw-bold me-2" onClick={logOut}>Logout</button>
                    
                       <NavLink className="items" to="/login">Login</NavLink>
                    
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;