import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import Events from './Events/Events';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [contdetails, setContDetails] = useState({
    num_of_boys: '-',
    num_of_girls: '-',
    college_rep: '-',
    leader_name: '-',
    leader_contact_num: '-',
    num_of_faculty_members: '-',
    num_of_coaches_pti: '-',
    num_of_supporting_staff: '-',
  });
  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}teams/contingent/details/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('contdetails data=', res.data);
        setContDetails(res.data);
        // console.log('contdetails', contdetails);
      })
      .catch((err) => {
        console.log('error=', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-dashboard regn_Pad">
      <div className="row_dbRegistration">
        <div className="col-xs-12 gutter2 widthAdjust">
          <div className="welcome-text2">
            {/* <div
              style={{ textAlign: 'center', fontSize: '15px', color: 'red' }}
            >
              <b>
                <u>NOTE:</u>
              </b>{' '}
              Enter the <b>number</b> of players in 'Athletics', whereas the{' '}
              <b>name</b> of players in other events.
            </div> */}
            <div className="text-justify">
              <h2>
                <br></br>
                <div className="sub_details">
                  <div className='contingent' >
                    <div className="events-heading">CONTINGENT DETAILS</div>
                    <div className="edit_button">
                      <Link
                        to="/dashboard/contingentEdit"
                        style={{ textDecoration: 'none', color: 'rgba(2, 0, 33, 1)' }}
                      >
                        Edit
                      </Link>
                    </div>
                  </div>

                  <table
                    align="center"
                    cellpadding="20"
                    className="events-table"
                  >
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        <b>Total Number of Boys</b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.num_of_boys}
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column" style={{ textAlign: 'left' }}>
                        <b>Total Number of Girls</b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.num_of_girls}
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="left-column"
                        style={{ textAlign: 'left', lineHeight: '1.5' }}
                      >
                        <b>
                          Total Number of Faculty members accompanying the
                          contingent
                        </b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.num_of_faculty_members}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="left-column"
                        style={{ textAlign: 'left', lineHeight: '1.5' }}
                      >
                        <b>
                          {`Total Number of Coaches & PTI accompanying the contingent`}
                        </b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.num_of_coaches_pti}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="left-column"
                        style={{ textAlign: 'left', lineHeight: '1.5' }}
                      >
                        <b>
                          Total Number of Supporting Staff accompanying the
                          contingent
                        </b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.num_of_supporting_staff}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="left-column"
                        style={{ textAlign: 'left', lineHeight: '1.5' }}
                      >
                        <b>Full Name of Contingent Leader</b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.leader_name}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="left-column"
                        style={{ textAlign: 'left', lineHeight: '1.5' }}
                      >
                        <b>Contact Number of Contingent Leader</b>{' '}
                      </td>
                      <td className="right-column">
                        {contdetails.leader_contact_num}
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <br></br>
                {/* <div className="contingent_details">
                <div style={{ display: 'flex',alignItems: 'center',justifyContent:'space-between',paddingLeft:'38%'}}>
                    <div className="edit_button">
                      <Link
                        to="/dashboard/events"
                        style={{ textDecoration: 'none', color: '#760e53' }}
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                  <Events />
                </div> */}
                <Events />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
