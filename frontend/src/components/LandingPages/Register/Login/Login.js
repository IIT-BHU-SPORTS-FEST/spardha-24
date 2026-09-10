import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import styles from '../Signup/Signup.module.css';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { useReducer } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

function Login() {
  const ref_container = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });
    if (!username.valid || !password.valid) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }
    let baseUrl = process.env.REACT_APP_BASE_URL;
    if (baseUrl.substring(baseUrl.length - 1) !== '/') baseUrl += '/';
    
    axios
      .post(`${baseUrl}auth/login/`, {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        dispatchToast({
          color: 'success',
          message: 'Logged in Successfully! Redirecting...',
        });
        setTimeout(() => {
          navigate('/dashboard/home');
        }, 2000);
      })
      .catch(({ response }) => {
        dispatchToast({
          color: 'danger',
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const usernameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.includes('@')) {
      if (!isEmail(value)) warning = 'Please enter a valid email address.';
    } else {
      if (value.length < 6 || value.length > 30)
        warning = 'Username must be of length 6 - 30.';
      else if (!isAlphanumeric(value, undefined, { ignore: ' ._-' }))
        warning = 'Please use only alphabets, numbers or _, - and .';
    }
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const passwordReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Password must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [username, dispatchUsername] = useReducer(usernameReducer, { value: '', warning: '', valid: false });
  const [password, dispatchpassword] = useReducer(passwordReducer, { value: '', warning: '', valid: false });
  const [toast, dispatchToast] = useReducer(toastReducer, { color: 'primary', message: '' });

  return (
    <div className={`${styles.outerdiv}`}>
      {/* HARD LOCKING HEIGHT TO 750px TO EXACTLY MATCH SIGNUP */}
      <div className={`${styles.maindiv}`} style={{ height: '750px', minHeight: '750px' }}>
        <AnimatePresence>
          <motion.div 
            id="loginDiv" 
            ref={ref_container} 
            initial={{ y: 10, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -100, opacity: 0 }} 
            transition={{ duration: 0.5 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            
            {/* Header Tabs */}
            <div className={styles.tabContainer}>
              <Link to="/register/login" className={`${styles.tab} ${styles.tabActive}`}>
                Login
              </Link>
              <Link to="/register/signup" className={`${styles.tab} ${styles.tabInactive}`}>
                Sign Up
              </Link>
            </div>

            {/* Form wrapper automatically pushes inputs to the vertical center */}
            <Form style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Row xs={1} md={1} xl={1} className="justify-content-center">
                <div className="col-sm-12" style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                  
                  {/* Username/Email Input */}
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="username" className={`${styles.label}`}>
                      Username / Email Address
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText className={`${styles['form-text']} ${username.valid ? 'text-success' : ''} ${username.warning !== '' ? 'text-danger' : ''}`}>
                        <FaEnvelope />
                      </InputGroupText>
                      <Input
                        name="username"
                        id="username"
                        type="text"
                        placeholder="Enter your Username or Email"
                        value={username.value}
                        valid={username.warning === '' && username.value !== ''}
                        invalid={username.warning !== ''}
                        onChange={(e) => dispatchUsername(e.target.value)}
                        className={`${styles['form-control']}`}
                        required
                      />
                    </InputGroup>
                    {username.warning !== '' && (
                      <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>
                        {username.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>

                  {/* Password Input */}
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="password" className={`${styles.label}`}>
                      Password 
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText className={`${styles['form-text']} ${password.valid ? 'text-success' : ''} ${password.warning !== '' ? 'text-danger' : ''}`}>
                        <FaKey />
                      </InputGroupText>
                      <Input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter the Password"
                        value={password.value}
                        valid={password.warning === '' && password.value !== ''}
                        invalid={password.warning !== ''}
                        onChange={(e) => dispatchpassword(e.target.value)}
                        className={`${styles['form-control']}`}
                        required
                      />
                    </InputGroup>
                    {password.warning !== '' && (
                      <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>
                        {password.warning}
                      </FormFeedback>
                    )}
                    
                    <div className={styles['extra-links']}>
                      <Link to="/register/forgot">Forgot Password?</Link>
                    </div>
                  </FormGroup>

                </div>
              </Row>

              {toast.message !== '' && (
                <Alert color={toast.color} style={{ fontSize: '14px', borderRadius: '10px', maxWidth: '500px' }} className="my-3 py-2 text-center mx-auto">
                  {toast.message}
                </Alert>
              )}

              {/* WRAPPED BUTTON TO KILL FLEXBOX STRETCHING BUG */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <Button color="primary" className={`${styles['btn-block']}`} onClick={submitHandler} style={{ width: '100%', maxWidth: '300px', height: '50px' }}>
                  LOGIN <span>&rarr;</span>
                </Button>
              </div>
              
              <div className="text-center mt-3" style={{ fontSize: '13px', color: '#ccc' }}>
                Don't have an account? <Link to="/register/signup" style={{ color: '#4982F6', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link>
                <br />
                Account not activated? <Link to="/register/verify" style={{ color: '#4982F6', textDecoration: 'none' }}>Verify Here</Link>
              </div>

            </Form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Login;