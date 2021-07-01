import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

import logo from '../assests/images/logo1.png';

const Navigationbar = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Dev Committee logo'
          />
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <LinkContainer to='/developers'>
            <Nav.Link>Developers</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/register'>
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
            <Nav.Link href='#login'>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
