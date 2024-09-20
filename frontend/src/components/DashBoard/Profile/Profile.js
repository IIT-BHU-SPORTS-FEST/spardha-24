import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import './Profile.css';
//toast.configure();

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  // console.log('token', token);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [user, setUser] = useState('');
  const [modal, setModal] = useState(false);
  // const [rel,setRel] =useState(true);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    // if(rel){
    //   console.log('rel',rel);
    //   // window.location.reload();
    //   setRel(false);
    // }
    // if (window.localStorage) {
    //   if (!localStorage.getItem('reload')) {
    //     localStorage['reload'] = true;
    //     setTimeout(window.location.reload(), 200);
    //   } else {
    //     localStorage.removeItem('reload');
    //   }
    // }

    axios
      .get(`${baseUrl}auth/update/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('user data=', res.data);
        setUser(res.data);
        // console.log('user', user);
      })
      .catch((err) => {
        console.log('error=', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delSucceed = () => {
    // console.log('delSucceed');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  const deleteProfile = async () => {
    // console.log('delete');
    await axios
      .get(`${baseUrl}auth/delete/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('delete', res);
        toggle();
        toast.success('Profile Deleted Successfully', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(delSucceed, 2000);
        // localStorage.removeItem('token');
        // window.location.href='/';
      })
      .catch((err) => {
        console.log('error', err);
        toggle();
        toast.error('Error in Deleting Profile', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const changePass = () => {
    // console.log('change');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/register/forgot');
  };

  return (
    <div className="user-dashboard3 profile_Pad">
      <div className="row_dbProfile">
        <div className="col-xs-12 gutter3 widthAdjust">
          <div className="welcome-text3" style={{ lineHeight: '1' }}>
            <div className="text-justify">
              <h2>
                {/* <div style={{textAlign: right}}><a href="profile.php?mode=edit">Edit</a></div> */}
                <table
                  align="center"
                  cellpadding="20"
                  className="profile-table"
                >
                  <tr>
                    <td className="left-column">Name</td>
                    <td className="right-column">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Email</td>
                    <td className="right-column">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Username</td>
                    <td className="right-column">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.username}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Designation </td>

                    <td className="right-column">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.designation}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Institute Name </td>
                    <td className="right-column">
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.institution}
                    </td>
                  </tr>
                  <tr>
                    <td className="left-column">Phone Number </td>
                    <td className="right-column">
                      {' '}
                      <p style={{ margin: '0px 40px 0px 0px' }}>:</p>
                      {user.phone}
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="left-column"></td>
                    <td className="right-column"></td>
                  </tr> */}
                  
                </table>

                <Modal isOpen={modal} toggle={toggle} size="lg">
                  <ModalHeader
                    toggle={toggle}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete Profile
                  </ModalHeader>
                  <ModalBody>
                    <p style={{ fontWeight: 'bold' }}>
                      Are you sure u want to delete your profile??
                    </p>
                    <div className="confirmButtons">
                      <button className="yes" onClick={deleteProfile}>
                        Yes
                      </button>
                      <button className="no" onClick={toggle}>
                        No
                      </button>
                    </div>
                  </ModalBody>
                </Modal>
              </h2>
              <div className='bottom_button'>
              <tr className="mine_proDbs">
                    <td className='button_gap'>
                      <button
                        href="#"
                        className="change-now"
                        data-toggle="modal"
                        data-target="#change_username"
                        onClick={changePass}
                      >
                        Change&nbsp;Password
                      </button>
                    </td>
                    <td className='button_gap'>
                      <button
                        href="#"
                        className="delete_button"
                        data-toggle="modal"
                        data-target="#change_password"
                        style={{
                          
                          border: '2px solid red',
                          padding: '9px 33px',
                        }}
                        onClick={toggle}
                      >
                        Delete&nbsp;Profile
                      </button>
                    </td>
                  </tr></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
