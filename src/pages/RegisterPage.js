import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReCAPTCHA from 'react-google-recaptcha';

// import necessary actions here
import { register, clearRegisterMsg } from '../reducers/register/actions';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap-floating-label';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { toast } from 'react-toastify';

const RegisterPage = ({
  onRegister,
  onClearMessage,
  registerData,
  history,
}) => {
  const { registerLoading, registerError, registerSuccess } = registerData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const reCaptcha = useRef();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const registerHandler = (e) => {
    e.preventDefault();

    onRegister({ name, email, password, recaptchaToken });
  };

  useEffect(() => {
    if (!registerLoading && registerSuccess) {
      toast.success('User has been registered. Sign in now!', {
        onClose: () => {
          onClearMessage();
          history.push('/login');
        },
      });
    }
    if (!registerLoading && registerError) {
      toast.error(registerError, { onClose: () => onClearMessage() });
    }
  }, [
    registerLoading,
    registerSuccess,
    registerError,
    onClearMessage,
    history,
  ]);

  return (
    <Container>
      <Row className='justify-content-center align-items-center full-height'>
        <Col sm={10} md={8} lg={5} className='justify-content-center'>
          <h2 className='text-center fs-1'>Sign Up</h2>

          <Card className='p-2'>
            <Card.Body>
              <Form onSubmit={(e) => registerHandler(e)}>
                {/* Email Address*/}
                <FloatingLabel
                  className='mb-3'
                  type='text'
                  label='Full Name*'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                {/* Email Address*/}
                <Form.Group className='mb-2'>
                  <FloatingLabel
                    type='email'
                    label='Email Address*'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Form.Text className='helper-text'>
                    Use Gravater email if you want your profile image.
                  </Form.Text>
                </Form.Group>

                {/* Password */}
                <InputGroup className='mb-2'>
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
                  <Form.Text className='helper-text'>
                    Must be at least 6 characters long.
                  </Form.Text>
                </InputGroup>

                {/* Confirm Password */}
                <InputGroup className='mb-3'>
                  <FloatingLabel
                    className='password-field'
                    type={showConfirmPassword ? 'text' : 'password'}
                    label='Confirm Password*'
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <InputGroup.Text
                    className='password-toggle'
                    onClick={toggleConfirmPassword}
                  >
                    {!showConfirmPassword ? (
                      <i className='fas fa-eye'></i>
                    ) : (
                      <i class='fas fa-eye-slash'></i>
                    )}
                  </InputGroup.Text>
                  {password !== confirmPassword ? (
                    <Form.Text className='helper-text'>
                      Does not match with your password.
                    </Form.Text>
                  ) : null}
                </InputGroup>

                <ReCAPTCHA
                  ref={reCaptcha}
                  sitekey={process.env.REACT_APP_RECPTCHA}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={(e) => setRecaptchaToken('')}
                />

                <div className='d-grid gap-3 mt-3'>
                  <Button
                    variant='primary'
                    type='submit'
                    disabled={registerLoading || password !== confirmPassword}
                  >
                    SIGN UP
                  </Button>
                </div>
              </Form>

              <Row className='mt-2'>
                <Col sm={12}>
                  <span className='small-text'>
                    Already have an account?{' '}
                    <Link to='/login'>
                      <strong>Sign In Now!</strong>
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
  registerData: state.authReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (data) => dispatch(register(data)),
    onClearMessage: () => dispatch(clearRegisterMsg()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(RegisterPage);
