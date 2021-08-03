import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap-floating-label';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { clearLoginMsg, login } from '../reducers/user/actions';

const LoginPage = ({ onLogin, onClearMsg, userData }) => {
  const { loginLoading, loginSuccess, loginError } = userData;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <Container>
      <Row className='justify-content-center align-items-center full-height'>
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
                    setEmail(e.target.value);
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
                      setPassword(e.target.value);
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

const mapStateToProps = (state) => ({
  userData: state.userReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(login(data)),
    onClearMsg: () => dispatch(clearLoginMsg()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(LoginPage);
