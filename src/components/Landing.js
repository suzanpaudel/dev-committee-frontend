import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Landing = () => {
  return (
    <div className='landingPage'>
      <Container>
        <Row className='justify-content-center align-items-center text-center full-height'>
          <Col md={8} className='justify-content-center text-center'>
            <h1>Dev Committee</h1>
            <p className='lead'>
              A perfect site for a developer to create a profile/portfolio,
              share posts and get help from other fellow developers
            </p>
            <LinkContainer to='/register'>
              <Button>Sign Up</Button>
            </LinkContainer>{' '}
            <LinkContainer to='/login'>
              <Button variant='outline-primary'> Sign In</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
