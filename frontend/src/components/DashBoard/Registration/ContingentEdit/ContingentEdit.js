import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {
  // Alert,
  Form,
  FormGroup,
  Input,
  // FormFeedback,
  // InputGroup,
  // InputGroupText,
  // Label,
  // Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContingentEdit.css';
import axios from 'axios';
// import isPhone from 'validator/lib/isMobilePhone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import '../../Profile/Profile.css'
import { ValidityContext } from '../../ValidityContext';
//toast.configure();

const ContingentEdit = () => {
  // const [contdetails,setContDetails] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { setIsValid } = useContext(ValidityContext);

  const rep = JSON.stringify(localStorage.getItem('College_Rep'));
  // console.log('rep=',rep);
  // console.log('type=',typeof rep);

  const [input, setInput] = useState({
    num_of_boys: '',
    num_of_girls: '',
    num_of_faculty_members: '',
    num_of_coaches_pti: '',
    num_of_supporting_staff:'',
    leader_name: '',
    leader_contact_num: '',
    college_rep: JSON.parse(rep),
  });

  useEffect(() => {
    // console.log('input=', input);
    axios
      .get(`${baseUrl}teams/contingent/details/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('contdetails data=', res.data);
        setInput(res.data);
        // console.log('input=',input);
      })
      .catch((err) => {
        console.log('error=', err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelButton = () => {
    // console.log('cancel');
    // redirect to registration page
    navigate('/dashboard/registration');
  };
  
  const submitButton = () => {
    let isValid = true; 
    if (
      input.num_of_boys === '' ||
      input.num_of_girls === '' ||
      input.leader_name === '' ||
      input.leader_contact_num === '' ||
      input.num_of_faculty_members === '' ||
      input.num_of_coaches_pti === '' ||
      input.num_of_supporting_staff === ''
    ) {
      toast.error('Please fill all the fields', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false; 
    } else if (input.num_of_boys < 0) {
      toast.error('Number of boys in a team should be positive', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (input.num_of_girls < 0) {
      toast.error('Number of girls in a team should be positive', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (input.num_of_faculty_members < 0) {
      toast.error('Number of Faculty members in a team should be positive', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (input.leader_name.length < 3) {
      toast.error('Please enter a valid name', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (input.num_of_coaches_pti < 0) {
      toast.error('Number of Coaches & PTI in a team should be positive', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (input.num_of_supporting_staff < 0) {
      toast.error('Number of Supporting Staff in a team should be positive', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    } else if (!input.leader_contact_num.match(/^[0-9]{10}$/)) {
      toast.error('Please enter a valid contact number', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      isValid = false;
    }
    setIsValid(isValid);
    if (isValid) {
      navigate('/dashboard/home', { state: { isValid } });
      axios
        .delete(`${baseUrl}teams/contingent/details/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          const passed = { ...input }; // Clone the input object
  
          passed['num_of_boys'] = parseInt(passed['num_of_boys']);
          passed['num_of_girls'] = parseInt(passed['num_of_girls']);
          passed['num_of_faculty_members'] = parseInt(passed['num_of_faculty_members']);
          passed['num_of_coaches_pti'] = parseInt(passed['num_of_coaches_pti']);
          passed['num_of_supporting_staff'] = parseInt(passed['num_of_supporting_staff']);
          passed['college_rep'] = JSON.parse(rep);
  
          axios
            .post(`${baseUrl}teams/contingent/details/`, passed, {
              headers: {
                Authorization: `Token ${token}`,
              },
            })
            .then((res) => {
              // On success, navigate to another page
              navigate('/dashboard/registration');
            })
            .catch((err) => {
              console.log('error', err);
            });
        })
        .catch((err) => {
          console.log('error=', err);
        });
    }
  };
  

  const inputChangeHandler = async (e) => {
    // console.log("e in form", e.target.value);
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
    //console.log('event=', e.target.value)
  };

  return (
    <div className="user-dashboard cont_Pad">
      <div className="row_dbContingent">
        <div className='new_div'>
        <div className="col-xs-12 gutter-cont widthAdjust">
          <div className="welcome-text-cont">
            <div className="text-justify">
              <h2>
                <Form className='border_div'>
                  <table
                    align="center"
                    cellpadding="20"
                    className="profile-table"
                  >
                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left', maxWidth: '66vw' }}>
                        Total Number of Boys {' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="num_of_boys"
                            name="num_of_boys"
                            placeholder="Enter total no. of Boys"
                            value={input.num_of_boys}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.num_of_boys !== '' && input.num_of_boys >= 0
                            }
                            invalid={
                              input.num_of_boys !== '' && input.num_of_boys < 0
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Total Number of Girls {' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="num_of_girls"
                            name="num_of_girls"
                            placeholder="Enter total no. of Girls"
                            value={input.num_of_girls}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.num_of_girls !== '' &&
                              input.num_of_girls >= 0
                            }
                            invalid={
                              input.num_of_girls !== '' &&
                              input.num_of_girls < 0
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Total Number of Faculty members {' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="num_of_faculty_members"
                            name="num_of_faculty_members"
                            placeholder="Enter total no. of Faculty members"
                            value={input.num_of_faculty_members}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.num_of_faculty_members !== '' &&
                              input.num_of_faculty_members >= 0
                            }
                            invalid={
                              input.num_of_faculty_members !== '' &&
                              input.num_of_faculty_members < 0
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Total Number of Coaches & PTI {' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="num_of_coaches_pti"
                            name="num_of_coaches_pti"
                            placeholder="Enter total no. of Coaches & PTI"
                            value={input.num_of_coaches_pti}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.num_of_coaches_pti !== '' && input.num_of_coaches_pti >= 0
                            }
                            invalid={
                              input.num_of_coaches_pti !== '' && input.num_of_coaches_pti < 0
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Total Number of Supporting Staff {' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="num_of_supporting_staff"
                            name="num_of_supporting_staff"
                            placeholder="Enter total no. of Supporting Staff"
                            value={input.num_of_supporting_staff}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.num_of_supporting_staff !== '' &&
                              input.num_of_supporting_staff >= 0
                            }
                            invalid={
                              input.num_of_supporting_staff !== '' &&
                              input.num_of_supporting_staff < 0
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>

                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Full Name of Contingent Leader{' '}
                        <span style={{ color: 'red' }}>*</span>{' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="text"
                            className="form-control_contDb"
                            id="leader_name"
                            name="leader_name"
                            placeholder="Enter the name of Contingent Leader"
                            value={input.leader_name}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={input.leader_name !== ''}
                            invalid={
                              input.leader_name === '' ||
                              input.leader_name.length < 3
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column single-line" style={{ textAlign: 'left' }}>
                        Contact Number of Contingent Leader{' '}
                        <span style={{ color: 'red' }}>*</span>{' '}
                      </td>
                      <td className="right-column" width="30%">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                        <FormGroup>
                          <Input
                            type="tel"
                            className="form-control_contDb"
                            id="leader_contact_num"
                            name="leader_contact_num"
                            placeholder="Enter the phone number of Contingent Leader"
                            value={input.leader_contact_num}
                            onChange={(e) => {
                              inputChangeHandler(e);
                            }}
                            valid={
                              input.leader_contact_num !== '' &&
                              input.leader_contact_num.length === 10
                            }
                            invalid={
                              input.leader_contact_num !== '' &&
                              input.leader_contact_num.length !== 10
                            }
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column single-line"></td>
                      <td
                        className="right-column"
                        style={{ color: 'red', fontSize: '15px' }}
                      >
                        <div id="error-reg-edit"></div>
                      </td>
                    </tr>
                  </table>
                </Form>
                <table
                  align="center"
                  cellpadding="20"
                  className="profile-table button-work"
                >
                  <tr className="mine_contDb">
                  <td>
                      {' '}
                      <button onClick={submitButton} className="register-now">
                        Submit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={cancelButton}
                        className="del_button"
                        style={{ marginRight: '0' }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </table>
              </h2>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default ContingentEdit;
