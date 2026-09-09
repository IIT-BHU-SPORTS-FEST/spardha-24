import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import isEmail from 'validator/lib/isEmail';
import {
  Alert,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Button,
  Row
} from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../Signup/Signup.module.css';

function Verify() {
  const ref_container = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });
    if (!email.valid) {
      dispatchToast({
        color: 'danger',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    const baseUrl = process.env.REACT_APP_BASE_URL;
    axios
      .post(`${baseUrl}auth/verify/`, {
        email: email.value,
      })
      .then((res) => {
        dispatchToast({
          color: 'success',
          message: res.data.success,
        });
      })
      .catch(({ response }) => {
        dispatchToast({
          color: 'danger',
          message: response?.data ? response.data[Object.keys(response.data)[0]].toString() : 'An error occurred.',
        });
      });
  };

  const emailReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isEmail(value)) warning = 'Please enter a valid email address.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [toast, dispatchToast] = useReducer(toastReducer, {
    color: 'primary',
    message: '',
  });

  return (
    <div className={`${styles.outerdiv}`}>
      <div className={`${styles.maindiv}`} style={{ height: '750px', minHeight: '750px' }}>
        <AnimatePresence>
          <motion.div
            id="verifyDiv"
            ref={ref_container}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            
            <div style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem' }}>
              <h2 style={{ color: 'white', fontWeight: '700', fontFamily: 'Poppins', letterSpacing: '1px' }}>
                Verify Account
              </h2>
              <p style={{ color: '#a0a0a0', fontSize: '14px', marginTop: '10px' }}>
                Enter your registered email address to receive an activation link.
              </p>
            </div>

            <Form style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Row xs={1} md={1} xl={1} className="justify-content-center">
                <div className="col-sm-12" style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                  
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="email" className={`${styles.label}`}>
                      Email Address <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          email.valid && ' text-success'
                        } ${email.warning !== '' && ' text-danger'}`}
                      >
                        <FaEnvelope />
                      </InputGroupText>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email.value}
                        valid={email.warning === '' && email.value !== ''}
                        invalid={email.warning !== ''}
                        onChange={(e) => {
                          dispatchEmail(e.target.value);
                        }}
                        className={`${styles['form-control']}`}
                        required
                      />
                    </InputGroup>
                    {email.warning !== '' && (
                      <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>
                        {email.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>

                </div>
              </Row>

              {toast.message !== '' && (
                <Alert
                  color={toast.color}
                  style={{ fontSize: '14px', borderRadius: '10px', maxWidth: '500px' }}
                  className="my-3 py-2 text-center mx-auto"
                >
                  {toast.message}
                </Alert>
              )}

              {/* FIX APPLIED HERE: Added whiteSpace: 'nowrap' and width: '100%' to the wrapper */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '1.5rem' }}>
                <Button
                  color="primary"
                  className={`${styles['btn-block']}`}
                  onClick={submitHandler}
                  style={{ width: '100%', maxWidth: '300px', height: '50px', whiteSpace: 'nowrap' }}
                >
                  SEND LINK <span>&rarr;</span>
                </Button>
              </div>

              <div className="text-center mt-4" style={{ fontSize: '13px', color: '#ccc' }}>
                Back to <Link to="/register/login" style={{ color: '#4982F6', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
                <br />
                Don't have an account? <Link to="/register/signup" style={{ color: '#4982F6', textDecoration: 'none' }}>Sign Up</Link>
              </div>

            </Form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Verify;