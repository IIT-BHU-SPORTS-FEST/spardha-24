import React, { useState, useContext } from "react";
// import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "react-modal";

const Updatefixtures = ({ isOpen, onRequestClose, gameId }) => {
  const [game, setGame] = useState({
    game_name: "Athletics",
    game_start: "",
    game_venue: "",
    team1: "",
    team2: "",
    is_completed: false,
  });
  const games = [
    "Athletics",
    "Badminton",
    "Basketball",
    "Boxing",
    "Chess",
    "Cricket",
    "Cycling",
    "Football",
    "Handball",
    "Hockey",
    "Kabbadi",
    "Kho-kho",
    "Powerlifting",
    "Squash",
    "Table Tennis",
    "Taekwondo",
    "Tennis",
    "Volleyball",
    "Weight Lifting",
  ];
  const { token } = useContext(AuthContext);

  // const [gameId, setGameId] = useState(""); // Input field for game_id

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  // const handleGameIdChange = (e) => {
  //   setGameId(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;

      const response = await fetch(`${apiUrl}/api/v1/games/${gameId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      });
      if (response.ok) {
        alert("Game information updated successfully!");
        // Automatically refresh the page
      window.location.reload();
      } else {
        alert("Failed to update game information.");
      }
    } catch (error) {
      alert("Error updating game");
    }
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    color: "#66ccff",
    fontWeight: "600",
    fontSize: "14px",
    textShadow: "0 0 5px #66ccff",
  };

  const inputStyle = {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1.5px solid #444c6b",
    backgroundColor: "rgba(40,44,63,0.8)",
    color: "#c0d8f9",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "inset 0 0 5px rgba(102,204,255,0.3)",
  };

  const inputFocusStyle = {
    borderColor: "#3399ff",
    boxShadow: "0 0 8px #3399ff",
    backgroundColor: "rgba(40,44,63,0.95)",
  };

  const selectStyle = {
    ...inputStyle,
    width: "185px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, #66ccff 50%), linear-gradient(135deg, #66ccff 50%, transparent 50%), linear-gradient(to right, #444c6b, #444c6b)",
    backgroundPosition:
      "calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 25px) 0.5em",
    backgroundSize: "5px 5px, 5px 5px, 1px 1.5em",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
  };

  const checkboxLabelStyle = {
    display: "flex",
    alignItems: "center",
    color: "#66ccff",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "15px",
    textShadow: "0 0 5px #66ccff",
  };

  const checkboxStyle = {
    marginLeft: "10px",
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#3399ff",
    transition: "box-shadow 0.3s ease",
  };

  const buttonBaseStyle = {
    padding: "10px 25px",
    borderRadius: "25px",
    fontWeight: "700",
    fontSize: "15px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    minWidth: "120px",
  };

  const cancelBtnStyle = {
    ...buttonBaseStyle,
    backgroundColor: "rgba(255, 60, 60, 0.8)",
    color: "#fff",
    textShadow: "0 0 6px #ff4d4d",
  };

  const cancelBtnHover = {
    backgroundColor: "#ff4d4d",
    boxShadow: "0 0 15px #ff4d4d",
  };

  const updateBtnStyle = {
    ...buttonBaseStyle,
    backgroundColor: "rgba(51, 153, 255, 0.85)",
    color: "#fff",
    textShadow: "0 0 8px #3399ff",
  };

  const updateBtnHover = {
    backgroundColor: "#3399ff",
    boxShadow: "0 0 20px #3399ff",
  };

  const [cancelHover, setCancelHover] = React.useState(false);
  const [updateHover, setUpdateHover] = React.useState(false);

  const [inputFocus, setInputFocus] = React.useState({});

  const handleInputFocus = (name) => {
    setInputFocus((prev) => ({ ...prev, [name]: true }));
  };

  const handleInputBlur = (name) => {
    setInputFocus((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update item"
      style={{
        overlay: {
          backgroundColor: "rgba(27,30,41,0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        },
        content: {
          position: "relative",
          inset: "unset",
          background:
            "rgba(27,30,41,0.75) linear-gradient(135deg, rgba(51,153,255,0.15), rgba(51,153,255,0.05))",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          border: "1.5px solid rgba(51,153,255,0.3)",
          padding: "30px 40px 35px 40px",
          width: "400px",
          maxWidth: "90vw",
          boxShadow: "0 0 20px rgba(51,153,255,0.3)",
          color: "#c0d8f9",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
      }}
    >
      <h1
        style={{
          color: "#66ccff",
          textAlign: "center",
          marginBottom: "25px",
          textShadow: "0 0 8px #66ccff",
          fontWeight: "700",
          letterSpacing: "1.5px",
          fontSize: "28px",
          userSelect: "none",
        }}
      >
        Update Game
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        {/* <div>
          <label htmlFor="game_id">Game ID:</label>
          <input
            type="text"
            id="game_id"
            name="game_id"
            value={gameId}
            onChange={handleGameIdChange}
            required
          />
        </div> */}
        <label style={labelStyle}>
          <b>Game Name:</b>
          <select
            value={game.game_name}
            onChange={handleChange}
            required
            name="game_name"
            style={inputFocus["game_name"] ? { ...selectStyle, ...inputFocusStyle } : selectStyle}
            onFocus={() => handleInputFocus("game_name")}
            onBlur={() => handleInputBlur("game_name")}
          >
            {games.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <label style={labelStyle}>
          <b>Game Start:</b>
          <input
            type="datetime-local"
            name="game_start"
            value={game.game_start}
            onChange={handleChange}
            required
            style={inputFocus["game_start"] ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
            onFocus={() => handleInputFocus("game_start")}
            onBlur={() => handleInputBlur("game_start")}
          />
        </label>
        <label style={labelStyle}>
          <b>Game Venue:</b>
          <input
            type="text"
            name="game_venue"
            value={game.game_venue}
            onChange={handleChange}
            required
            style={inputFocus["game_venue"] ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
            onFocus={() => handleInputFocus("game_venue")}
            onBlur={() => handleInputBlur("game_venue")}
          />
        </label>
        <label style={labelStyle}>
          <b>Team 1:</b>
          <input
            type="text"
            name="team1"
            value={game.team1}
            onChange={handleChange}
            required
            style={inputFocus["team1"] ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
            onFocus={() => handleInputFocus("team1")}
            onBlur={() => handleInputBlur("team1")}
          />
        </label>
        <label style={labelStyle}>
          <b>Team 2:</b>
          <input
            type="text"
            name="team2"
            value={game.team2}
            onChange={handleChange}
            required
            style={inputFocus["team2"] ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
            onFocus={() => handleInputFocus("team2")}
            onBlur={() => handleInputBlur("team2")}
          />
        </label>
        <label style={checkboxLabelStyle}>
          <b>Is Completed:</b>
          <input
            type="checkbox"
            id="is_completed"
            name="is_completed"
            style={checkboxStyle}
            checked={game.is_completed}
            onChange={() =>
              setGame({ ...game, is_completed: !game.is_completed })
            }
          />
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            type="button"
            style={cancelHover ? { ...cancelBtnStyle, ...cancelBtnHover } : cancelBtnStyle}
            onClick={onRequestClose}
            onMouseEnter={() => setCancelHover(true)}
            onMouseLeave={() => setCancelHover(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={updateHover ? { ...updateBtnStyle, ...updateBtnHover } : updateBtnStyle}
            onMouseEnter={() => setUpdateHover(true)}
            onMouseLeave={() => setUpdateHover(false)}
          >
            Update Game
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Updatefixtures;
