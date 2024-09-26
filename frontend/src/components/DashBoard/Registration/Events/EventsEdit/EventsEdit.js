import React, { useState, useEffect } from 'react';
import styles from './EventsEdit.module.css';
import { FaMale, FaFemale } from 'react-icons/fa';
import { Button, Collapse, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { EventContext } from '../../../../../contexts/EventContext';

const GAMES = {
  boys: [
    'Athletics',
    // 'Aquatics',
    'Badminton',
    'Basketball',
    'Boxing',
    'Kabaddi',
    'Kho-Kho',
    'Handball',
    'Lawn Tennis',
    'Squash',
    'Table Tennis',
    'Volleyball',
    'Taekwondo',
    'Cricket',
    'Football',
    'Hockey',
    'Powerlifting',
    'Weightlifting',
  ],
  girls: [
    'Athletics',
    // 'Aquatics',
    'Badminton',
    'Basketball',
    'Boxing',
    'Kabaddi',
    'Kho-Kho',
    'Handball',
    'Lawn Tennis',
    'Squash',
    'Table Tennis',
    'Taekwondo',
    'Volleyball',
    'Football',
  ],
  mixed: ['Chess', 'Cycling'],
};

function EventsEdit() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const selectedGames = [];
  const [showBoys, setShowBoys] = useState(true);
  const [showGirls, setShowGirls] = useState(true);
  const [showMixed, setShowMixed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const allFalseGameChoice = {};
  GAMES.boys.forEach((game) => {
    allFalseGameChoice[game + '_B'] = false;
  });
  GAMES.girls.forEach((game) => {
    allFalseGameChoice[game + '_G'] = false;
  });
  GAMES.mixed.forEach((game) => {
    allFalseGameChoice[game + '_M'] = false;
  });

  const [games, setGames] = useState({});
  const [prevGames, setPrevGames] = useState({}); //for checking if any changes were made

  let baseUrl = process.env.REACT_APP_BASE_URL;
  if (baseUrl.substring(baseUrl.length - 1) !== '/') baseUrl += '/';

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}teams/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        const newGames = { ...selectedGames };
        for (const team of data) {
          newGames[`${team.game}`] = true;
        }
        console.log('newg', newGames);
        setGames(newGames);
        setPrevGames({ ...newGames });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setErrorMessage('Could not fetch data ' + err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    const game = e.target.id;
    games[game] = !games[game];
    console.log(prevGames, games);
    setGames({ ...games });
  };
  function getChanges() {
    let changes = { add: [], remove: [] };
    for (let game in games) {
      if (games[game] !== !!prevGames[game]) {
        // changes[game]=games[game];
        if (games[game]) {
          changes.add.push(game);
        } else {
          changes.remove.push(game);
        }
      }
    }
    console.log(changes);
    return changes;
  }
  const { setGetEventCount } = React.useContext(EventContext);
  const submitHandler = async () => {
    let changes = getChanges();
    setLoading(true);
    axios
      .patch(
        `${baseUrl}teams/`,
        { changes },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setGetEventCount((prev) => prev + 1);
        navigate('/dashboard/registration');
      })
      .catch((err) => {
        console.error(err); //could not submit changes
        setErrorMessage('Could not submit changes ' + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`${styles['user-dashboard']}`}>
      <div className={`${styles['welcome-text']}`}>
        <div className="col-sm-12">
          <div className="row xs-1 sm-2">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className={`${styles.panel}`} style={{ height: '100%' }}>
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowBoys((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#FFFFFF' }}
                  >
                    <FaMale /> <b>Boys </b>
                  </h4>
                </div>
                <Collapse isOpen={showBoys}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        {GAMES.boys.map((game) => {
                          return (
                            <FormGroup
                              key={game + '_B'}
                              className={`${styles['input-wrapper']}`}
                            >
                              <Input
                                type="checkbox"
                                id={game + '_B'}
                                checked={games[game + '_B']}
                                onChange={changeHandler}
                              />
                              <Label
                                className={`${styles['sports-label']}`}
                                for={game + '_B'}
                              >
                                {game}
                              </Label>
                            </FormGroup>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`${styles.panel}`}>
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowGirls((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#FFFFFF' }}
                  >
                    <FaFemale /> <b>Girls </b>
                  </h4>
                </div>
                <Collapse isOpen={showGirls}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        {GAMES.girls.map((game) => {
                          return (
                            <FormGroup
                              key={game + '_G'}
                              className={`${styles['input-wrapper']}`}
                            >
                              <Input
                                type="checkbox"
                                id={game + '_G'}
                                checked={games[game + '_G']}
                                onChange={changeHandler}
                              />
                              <Label
                                className={`${styles['sports-label']}`}
                                for={game + '_G'}
                              >
                                {game}
                              </Label>
                            </FormGroup>
                          );
                        })}
                      </div>
                      <div className={`col-sm-6 ${styles.container}`}></div>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div
                className={`${styles.panel}`}
                style={{ marginBottom: '0', marginTop: '25px' }}
              >
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowMixed((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#FFFFFF' }}
                  >
                    <b>Mixed </b>
                  </h4>
                </div>
                <Collapse isOpen={showMixed}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        {GAMES.mixed.map((game) => {
                          return (
                            <FormGroup
                              key={game + '_M'}
                              className={`${styles['input-wrapper']}`}
                            >
                              <Input
                                type="checkbox"
                                id={game + '_M'}
                                checked={games[game + '_M']}
                                onChange={changeHandler}
                              />
                              <Label
                                className={`${styles['sports-label']}`}
                                for={game + '_M'}
                              >
                                {game}
                              </Label>
                            </FormGroup>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <ErrorMessage message={errorMessage} />
        <Button
          color="success"
          style={{
            fontWeight: 'bold', width: 'fit-content',
          }}
          className={styles['btn']}
          onClick={submitHandler}
          disabled={loading}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

function ErrorMessage({ message }) {
  if (message === '') return null;
  return (
    <div className={styles['error-message']}>
      <p>{message}</p>
    </div>
  );
}

export default EventsEdit;
