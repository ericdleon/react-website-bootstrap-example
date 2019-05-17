import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">MyPortfolio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/projects" to="/projects">
              Projects
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/Resume" to="/resume">
              Resume
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
