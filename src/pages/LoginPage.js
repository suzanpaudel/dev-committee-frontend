import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap-floating-label';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log('Login Working');
  };

  return (
    <Container>
      <Row className='justify-content-center align-items-center maxHeight'>
        <Col sm={10} md={8} lg={5} className='justify-content-center'>
          <h2 className='text-center fs-1'>Sign In</h2>

          <Card className='p-2'>
            <Card.Body>
              <Form onSubmit={(e) => loginHandler(e)}>
                {/* Email Address*/}
                <FloatingLabel
                  className=' mb-3'
                  type='email'
                  label='Email Address*'
                  value={email}
                  onChange={(e) => {
                    setEmail(e);
                  }}
                />

                {/* Password */}
                <InputGroup className=' mb-3'>
                  <FloatingLabel
                    className='password-field'
                    type={showPassword ? 'text' : 'password'}
                    label='Password*'
                    value={password}
                    onChange={(e) => {
                      setPassword(e);
                    }}
                  />
                  <InputGroup.Text
                    className='password-toggle'
                    onClick={togglePassword}
                  >
                    {!showPassword ? (
                      <i className='fas fa-eye'></i>
                    ) : (
                      <i class='fas fa-eye-slash'></i>
                    )}
                  </InputGroup.Text>
                </InputGroup>

                <div className='d-grid gap-3'>
                  <Button variant='primary' type='submit'>
                    SIGN IN
                  </Button>
                </div>
              </Form>

              <Row className='mt-2'>
                <Col sm={12} className='small-text'>
                  <Link to='/forget-password'>
                    <strong>Forget Password</strong>
                  </Link>
                </Col>
                <Col sm={12}>
                  <span className='small-text'>
                    Do not have an account?{' '}
                    <Link to='/register'>
                      <strong>Create Now!</strong>
                    </Link>
                  </span>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
