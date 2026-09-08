import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import styles from './Signup.module.css';
import {
  FaUser,
  FaEnvelope,
  FaAt,
  FaKey,
  FaBuilding,
  FaBriefcase,
  FaPhone,
} from 'react-icons/fa';
import instituteList from './institutelist.json';
import { useReducer } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isInt from 'validator/lib/isInt';
import isPhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';
import { AnimatePresence, motion } from 'framer-motion';

function Signup() {
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
    if (password2.value !== password1.value) {
      dispatchPassword1(password1.value);
      dispatchPassword2(password2.value);
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }
    
    if (
      !email.valid ||
      !username.valid ||
      !password1.valid ||
      !password2.valid ||
      !name.valid ||
      !designation.valid ||
      !institute.valid ||
      !phone.valid
    ) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }
    const baseUrl = process.env.REACT_APP_BASE_URL;
    axios
      .post(`${baseUrl}auth/register/`, {
        username: username.value,
        email: email.value,
        password: password1.value,
        name: name.value,
        institution_name: institute.value,
        designation: designation.value,
        phone_no: phone.value,
      })
      .then((res) => {
        dispatchToast({
          color: 'success',
          message: res.data.success,
        });
      })
      .catch(({ response }) => {
        if (response.status === 500 || response.status === 403 || response.status === 502) {
          navigate('/*');
        }
        dispatchToast({
          color: 'danger',
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const emailReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isEmail(value)) warning = 'Please enter a valid email address.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const usernameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30) warning = 'Username must be of length 6 - 30.';
    else if (!isAlphanumeric(value, undefined, { ignore: ' ._-' })) warning = 'Please use only alphabets, numbers or _, - and .';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const password1Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30) warning = 'Password must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const password2Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value !== password1.value) warning = 'Passwords do not match.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const nameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isAlpha(value, undefined, { ignore: ' ' })) warning = 'Please enter a valid name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const designationReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid designation.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const instituteReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid Institute Name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const phoneReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isPhone(value, 'en-IN')) warning = 'Please enter a valid phone number.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', warning: '', valid: false });
  const [username, dispatchUsername] = useReducer(usernameReducer, { value: '', warning: '', valid: false });
  const [password1, dispatchPassword1] = useReducer(password1Reducer, { value: '', warning: '', valid: false });
  const [password2, dispatchPassword2] = useReducer(password2Reducer, { value: '', warning: '', valid: false });
  const [name, dispatchName] = useReducer(nameReducer, { value: '', warning: '', valid: false });
  const [designation, dispatchDesignation] = useReducer(designationReducer, { value: '', warning: '', valid: false });
  const [institute, dispatchInstitute] = useReducer(instituteReducer, { value: '', warning: '', valid: false });
  const [phone, dispatchPhone] = useReducer(phoneReducer, { value: '', warning: '', valid: false });
  const [toast, dispatchToast] = useReducer(toastReducer, { color: 'primary', message: '' });

  return (
    <div className={`${styles.outerdiv}`}>
      <div className={`${styles.maindiv}`}>
        <AnimatePresence>
          <motion.div 
            id="signUpDiv" 
            ref={ref_container} 
            initial={{ y: 10, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -100, opacity: 0 }} 
            transition={{ duration: 0.5 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            
            {/* Header Tabs - Pill Design */}
            <div className={styles.tabContainer}>
              <Link to="/register/login" className={`${styles.tab} ${styles.tabInactive}`}>
                Login
              </Link>
              <Link to="/register/signup" className={`${styles.tab} ${styles.tabActive}`}>
                Sign Up
              </Link>
            </div>

            <Form className={`${styles['form-horizontal']}`}>
              <FormGroup className={`${styles['form-group']}`}>
                
                {/* Row 1: Email & Username */}
                <Row xs={1} md={2} xl={2}>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="email" className={`${styles.label}`}>Email Address <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaEnvelope /></InputGroupText>
                        <Input
                          name="email" type="email" placeholder="Enter your email address"
                          value={email.value} onChange={(e) => dispatchEmail(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {email.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{email.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="username" className={`${styles.label}`}>Username <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaAt /></InputGroupText>
                        <Input
                          name="username" type="text" placeholder="Enter your username"
                          value={username.value} onChange={(e) => dispatchUsername(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {username.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{username.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                </Row>

                {/* Row 2: Name & Phone */}
                <Row xs={1} md={2} xl={2}>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="name" className={`${styles.label}`}>Name <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaUser /></InputGroupText>
                        <Input
                          name="name" type="text" placeholder="Enter your name"
                          value={name.value} onChange={(e) => dispatchName(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {name.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{name.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="phone" className={`${styles.label}`}>Phone Number <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaPhone /></InputGroupText>
                        <Input
                          name="phone" type="tel" placeholder="Enter your phone number"
                          value={phone.value} onChange={(e) => dispatchPhone(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {phone.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{phone.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                </Row>

                {/* Row 3: Password & Confirm Password */}
                <Row xs={1} md={2} xl={2}>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="password1" className={`${styles.label}`}>Password <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaKey /></InputGroupText>
                        <Input
                          name="password1" type="password" placeholder="Enter your password"
                          value={password1.value} onChange={(e) => dispatchPassword1(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {password1.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{password1.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="password2" className={`${styles.label}`}>Confirm Password <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaKey /></InputGroupText>
                        <Input
                          name="password2" type="password" placeholder="Confirm your password"
                          value={password2.value} onChange={(e) => dispatchPassword2(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {password2.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{password2.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                </Row>

                {/* Row 4: Institute & Designation */}
                <Row xs={1} md={2} xl={2}>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="institute" className={`${styles.label}`}>Institute Name <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaBuilding /></InputGroupText>
                        <Input
                          name="institute" type="text" placeholder="Select / Enter your institute" list="instituteList"
                          value={institute.value} onChange={(e) => dispatchInstitute(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                        <datalist id="instituteList">
                          {instituteList.map(({ id, name }) => (
                            <option value={name} key={id} />
                          ))}
                        </datalist>
                      </InputGroup>
                      {institute.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{institute.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                  <div className="col-sm-6">
                    <FormGroup className={`${styles['form-group']}`}>
                      <Label for="designation" className={`${styles.label}`}>Designation <span style={{ color: 'red' }}>*</span></Label>
                      <InputGroup className={`${styles['input-group']}`}>
                        <InputGroupText className={`${styles['form-text']}`}><FaBriefcase /></InputGroupText>
                        <Input
                          name="designation" type="text" placeholder="Write your designation"
                          value={designation.value} onChange={(e) => dispatchDesignation(e.target.value)}
                          className={`${styles['form-control']}`} required
                        />
                      </InputGroup>
                      {designation.warning !== '' && <FormFeedback className="text-danger d-block fw-bold" style={{ fontSize: '12px' }}>{designation.warning}</FormFeedback>}
                    </FormGroup>
                  </div>
                </Row>
              </FormGroup>

              {/* Terms Checkbox */}
              <div className={`${styles['form-footer']}`}>
                <Input className={`${styles['form-footer-input']}`} type="checkbox" name="terms" id="terms" required />
                <Label for="terms" className={`${styles['label']}`} style={{ marginBottom: 0 }}>
                  By submitting this form, you agree to abide by the <a href="/pdf/RuleBook.pdf" target="_blank" rel="noreferrer" style={{ color: '#4982F6', textDecoration: 'none' }}>"Rules of Spardha 2026."</a>
                </Label>
              </div>

              {toast.message !== '' && (
                <Alert color={toast.color} style={{ fontSize: '14px', borderRadius: '10px' }} className="my-3 py-2 text-center">
                  {toast.message}
                </Alert>
              )}

              <Button color="primary" className={`${styles['btn-block']}`} onClick={submitHandler}>
                Sign Up <span>&rarr;</span>
              </Button>

            </Form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Signup;