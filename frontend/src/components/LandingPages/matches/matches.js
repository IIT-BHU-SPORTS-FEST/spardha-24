import React, { useState } from 'react';
import styles from './Matches.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import MatchResults from './Result';

const fixturesData = [
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "9:00 AM",
    "venue": "Volleyball Court",
    "team1": "KNIT Sultanpur",
    "team2": "REC BANDA"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "9:00 AM",
    "venue": "Volleyball Court",
    "team1": "SRMU",
    "team2": "RGIPT"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "10:00 AM",
    "venue": "Volleyball Court",
    "team1": "Galgotia",
    "team2": "REC Ambedkar"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "10:00 AM",
    "venue": "Volleyball Court",
    "team1": "SOA",
    "team2": "BBDU"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:30 PM",
    "venue": "Volleyball Court",
    "team1": "REC (G)",
    "team2": "Galgotia (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "2:30 PM - 4:00 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Roorkee (G)",
    "team2": "BBDU (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Dhanbad",
    "team2": "REC Ambedkar"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Volleyball Court",
    "team1": "Galgotia",
    "team2": "IET Lucknow"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "4:00 PM - 5:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Dhanbad (G)",
    "team2": "IIT Roorkee (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "4:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Roorkee",
    "team2": "SRMU"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "4:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU(B)",
    "team2": "RGIPT"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "5:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU(A)",
    "team2": "REC BANDA"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "5:30 PM",
    "venue": "Volleyball Court",
    "team1": "SOA",
    "team2": "JEC Jabalpur"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "5:30 PM - 7:00 PM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU B (G)",
    "team2": "REC (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "6:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Dhanbad",
    "team2": "IET Lucknow"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "6:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT Roorkee",
    "team2": "IIT BHU(B)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "7:00 PM - 8:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU A (G)",
    "team2": "KNIT (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "7:30 PM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU(A)",
    "team2": "KNIT"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-09",
    "time": "7:30 PM",
    "venue": "Volleyball Court",
    "team1": "BBDU",
    "team2": "BIT Deoghar"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "8:00 AM",
    "venue": "Volleyball Court",
    "team1": "BBDU",
    "team2": "JEC Jabalpur"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "8:00 AM",
    "venue": "Volleyball Court",
    "team1": "SOA",
    "team2": "BIT Deoghar"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "8:30 AM - 9:30 AM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU B (G)",
    "team2": "Galgotia (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "9:00 AM",
    "venue": "Volleyball Court",
    "team1": "REC Ambedkar",
    "team2": "IET Lucknow"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "9:00 AM",
    "venue": "Volleyball Court",
    "team1": "IIT Dhanbad",
    "team2": "Galgotia"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "9:00 AM - 10:30 AM",
    "venue": "Volleyball Court",
    "team1": "IIT Dhanbad (G)",
    "team2": "BBDU (G)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "10:00 AM",
    "venue": "Volleyball Court",
    "team1": "RGIPT",
    "team2": "IIT Roorkee"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "10:00 AM",
    "venue": "Volleyball Court",
    "team1": "IIT BHU(B)",
    "team2": "SRMU"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "11:00 AM",
    "venue": "Volleyball Court",
    "team1": "BIT Deoghar",
    "team2": "JEC Jabalpur"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "TBD",
    "venue": "Volleyball Court",
    "team1": "Quarter Final 1",
    "team2": "QF1"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-10",
    "time": "TBD",
    "venue": "Volleyball Court",
    "team1": "Quarter Final 4",
    "team2": "QF4"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-11",
    "time": "TBD",
    "venue": "Volleyball Court",
    "team1": "Winner of QF",
    "team2": "Winner of QF (SF1)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-11",
    "time": "TBD",
    "venue": "Volleyball Court",
    "team1": "Winner of QF",
    "team2": "Winner of QF (SF2)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-11",
    "time": "TBD",
    "venue": "Court B",
    "team1": "Runner Up SF 1",
    "team2": "Runner Up SF 2 (3rd Place)"
  },
  {
    "game_name": "Volleyball",
    "date": "2026-10-11",
    "time": "TBD",
    "venue": "Court A",
    "team1": "Winner of SF 1",
    "team2": "Winner of SF 2 (Final)"
  },
  {
    "game_name": "Football",
    "date": "2026-10-08",
    "time": "6:30 PM - 7:30 PM",
    "venue": "Football Ground",
    "team1": "IIT BHU B",
    "team2": "JEC Jabalpur"
  },
  {
    "game_name": "Football",
    "date": "2026-10-08",
    "time": "7:30 PM - 8:30 PM",
    "venue": "Football Ground",
    "team1": "IIT BHU A",
    "team2": "VTI Jamshedpur"
  },
  {
    "game_name": "Football",
    "date": "2026-10-08",
    "time": "8:30 PM - 9:30 PM",
    "venue": "Football Ground",
    "team1": "SOA",
    "team2": "ARSD"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "7:30 AM - 8:30 AM",
    "venue": "Football Ground",
    "team1": "ARSD",
    "team2": "BBD"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "8:30 AM - 9:30 AM",
    "venue": "Football Ground",
    "team1": "VTI",
    "team2": "KNIT Sultanpur"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "9:30 AM - 10:30 AM",
    "venue": "Football Ground",
    "team1": "Galgotiya",
    "team2": "VIT Bhopal"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "6:00 PM - 7:00 PM",
    "venue": "Football Ground",
    "team1": "IIT BHU A",
    "team2": "KNIT"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "7:00 PM - 8:00 PM",
    "venue": "Football Ground",
    "team1": "IIT BHU B",
    "team2": "REC"
  },
  {
    "game_name": "Football",
    "date": "2026-10-09",
    "time": "8:00 PM - 9:00 PM",
    "venue": "Football Ground",
    "team1": "VIT Bhopal",
    "team2": "BIT Mesra"
  },
  {
    "game_name": "Football",
    "date": "2026-10-10",
    "time": "7:00 AM - 8:00 AM",
    "venue": "Football Ground",
    "team1": "SOA",
    "team2": "BBD"
  },
  {
    "game_name": "Football",
    "date": "2026-10-10",
    "time": "8:00 AM - 9:00 AM",
    "venue": "Football Ground",
    "team1": "Galgotiya",
    "team2": "BIT Mesra"
  },
  {
    "game_name": "Football",
    "date": "2026-10-10",
    "time": "9:00 AM - 10:00 AM",
    "venue": "Football Ground",
    "team1": "JEC",
    "team2": "REC Ambedkar"
  },
  { 
    "game_name": "Hockey",
    "date": "2026-10-09",
    "time": "8:30 AM - 10 AM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU B",
    "team2": "IIT Guwahati"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-09",
    "time": "10 AM - 11:30 AM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU A",
    "team2": "IIT Dhanbad"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-09",
    "time": "5 PM - 6:30 PM",
    "venue": "Hockey Ground",
    "team1": "IIT Kharagpur",
    "team2": "IIT Guwahati"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-09",
    "time": "6:30 PM - 8 PM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU A",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-10",
    "time": "8 AM - 9:30 AM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU A",
    "team2": "IIT Kharagpur"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-10",
    "time": "9:30 AM - 11 AM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU B",
    "team2": "IIT Dhanbad"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-10",
    "time": "4:30 PM - 6 PM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU A",
    "team2": "IIT Guwahati"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-10",
    "time": "6 PM - 7:30 PM",
    "venue": "Hockey Ground",
    "team1": "IIT Kharagpur",
    "team2": "IIT Dhanbad"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-11",
    "time": "8 AM - 9:30 AM",
    "venue": "Hockey Ground",
    "team1": "IIT BHU B",
    "team2": "IIT Kharagpur"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-11",
    "time": "9:30 AM - 11 AM",
    "venue": "Hockey Ground",
    "team1": "IIT Guwahati",
    "team2": "IIT Dhanbad"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-11",
    "time": "4:30 PM - 6 PM",
    "venue": "Hockey Ground",
    "team1": "2nd Runner Up",
    "team2": "3rd Runner Up"
  },
  {
    "game_name": "Hockey",
    "date": "2026-10-11",
    "time": "6 PM - 7:30 PM",
    "venue": "Hockey Ground",
    "team1": "Table Topper",
    "team2": "1st Runner Up"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "3:00 PM - 3:45 PM",
    "venue": "Kabaddi Ground",
    "team1": "JEC JABALPUR",
    "team2": "IIT ROORKEE"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "4:00 PM - 4:45 PM",
    "venue": "Kabaddi Ground",
    "team1": "PIET HARYANA",
    "team2": "SOA"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "5:00 PM - 5:45 PM",
    "venue": "Kabaddi Ground",
    "team1": "IIT BHU B",
    "team2": "MBM JODHPUR"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "6:00 PM - 6:45 PM",
    "venue": "Kabaddi Ground",
    "team1": "IIT BHU A",
    "team2": "IIT ROORKEE"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "7:00 PM - 7:30 PM",
    "venue": "Kabaddi Ground",
    "team1": "IIT BHU (G)",
    "team2": "SOA (G)"
  },
  {
    "game_name": "Kabbadi",
    "date": "2026-10-09",
    "time": "7:45 PM - 8:15 PM",
    "venue": "Kabaddi Ground",
    "team1": "JEC JABALPUR (G)",
    "team2": "MBM JODHPUR (G)"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "10:00 AM - 11:00 AM",
    "venue": "Table 1",
    "team1": "BBDU",
    "team2": "IIITM Gwalior"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "10:00 AM - 11:00 AM",
    "venue": "Table 2",
    "team1": "IIT BHU A",
    "team2": "SOA"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "10:00 AM - 11:00 AM",
    "venue": "Table 3",
    "team1": "IIT BHU C",
    "team2": "KNIT"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "10:00 AM - 11:00 AM",
    "venue": "Table 4",
    "team1": "Sunbeam (G)",
    "team2": "BIT Gorakhpur (G)"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Table 1",
    "team1": "IIT BHU B",
    "team2": "REC Banda"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Table 3",
    "team1": "IIT BHU B (Girls)",
    "team2": "REC Ambedkar (G)"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Table 4",
    "team1": "IIT BHU A (Girls)",
    "team2": "REC Banda (G)"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "12:00 PM - 1:00 PM",
    "venue": "Table 1",
    "team1": "IIT BHU A",
    "team2": "KNIT"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "12:00 PM - 1:00 PM",
    "venue": "Table 2",
    "team1": "REC Ambedkar Nagar",
    "team2": "SOA"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "2:30 PM - 3:30 PM",
    "venue": "Table 1",
    "team1": "BBDU",
    "team2": "IIITM Gwalior"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "2:30 PM - 3:30 PM",
    "venue": "Table 3",
    "team1": "REC Banda",
    "team2": "Galgotias"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "2:30 PM - 3:30 PM",
    "venue": "Table 4",
    "team1": "KNIT (G)",
    "team2": "REC Banda (G)"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "3:30 PM - 4:30 PM",
    "venue": "Table 1",
    "team1": "IIT BHU B",
    "team2": "IIITM Gwalior"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "3:30 PM - 4:30 PM",
    "venue": "Table 2",
    "team1": "IIT BHU Prof",
    "team2": "Galgotias"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "3:30 PM - 4:30 PM",
    "venue": "Table 3",
    "team1": "IIT BHU A",
    "team2": "KNIT"
  },
  {
    "game_name": "Table Tennis",
    "date": "2026-10-09",
    "time": "3:30 PM - 4:30 PM",
    "venue": "Table 4",
    "team1": "IIT BHU B (Girls)",
    "team2": "Sunbeam (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Court 1",
    "team1": "IIT(BHU) B",
    "team2": "Reset Academy A"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Court 2",
    "team1": "IET Lucknow",
    "team2": "Reset Academy B"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-09",
    "time": "12:00 PM - 1:00 PM",
    "venue": "Court 1",
    "team1": "IIT(BHU) A (G)",
    "team2": "IIT(BHU) B (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-09",
    "time": "4:00 PM - 5:00 PM",
    "venue": "Court 1",
    "team1": "IIT (BHU) A",
    "team2": "IET Lucknow"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-09",
    "time": "4:00 PM - 5:00 PM",
    "venue": "Court 2",
    "team1": "IIT Roorkee",
    "team2": "Reset Academy A"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Court 1",
    "team1": "IIT(BHU) A",
    "team2": "Reset Academy B"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Court 2",
    "team1": "IIT Roorkee",
    "team2": "IIT(BHU) B"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "5:30 PM - 6:00 PM",
    "venue": "Court 1 (Match M1)",
    "team1": "IIT(BHU) A P1",
    "team2": "IET Lucknow P2"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "5:30 PM - 6:00 PM",
    "venue": "Court 2 (Match M2)",
    "team1": "IIT(BHU) A P2",
    "team2": "IET Lucknow P1"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "6:00 PM - 6:30 PM",
    "venue": "Court 1 (Match M3)",
    "team1": "Reset Academy B P1",
    "team2": "Reset Academy A P2"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "6:00 PM - 6:30 PM",
    "venue": "Court 2 (Match M4)",
    "team1": "IIT Roorkee P2",
    "team2": "IIT(BHU) B P1"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "6:30 PM - 7:00 PM",
    "venue": "Court 1 (Match M5)",
    "team1": "IIT Roorkee P1",
    "team2": "IIT(BHU) B P2"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-10",
    "time": "6:30 PM - 7:00 PM",
    "venue": "Court 2 (Match M6)",
    "team1": "Reset Academy B P2",
    "team2": "Reset Academy A P1"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-11",
    "time": "9:30 AM - 10:30 AM",
    "venue": "Court 1",
    "team1": "IIT(BHU) A (G)",
    "team2": "Reset Academy (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-11",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Court 1",
    "team1": "IIT(BHU) B (G)",
    "team2": "Reset Academy (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-11",
    "time": "2:00 PM - 2:30 PM",
    "venue": "Court 1 (Match M1)",
    "team1": "IIT (BHU) B P1 (G)",
    "team2": "Reset P2 (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-11",
    "time": "2:00 PM - 2:30 PM",
    "venue": "Court 2 (Match M3)",
    "team1": "Reset P1 (G)",
    "team2": "IIT (BHU) B P2 (G)"
  },
  {
    "game_name": "Squash",
    "date": "2026-10-11",
    "time": "2:30 PM - 3:00 PM",
    "venue": "Court 1 (Match M2)",
    "team1": "IIT (BHU) A P1 (G)",
    "team2": "IIT (BHU) A P2 (G)"
  },
  {
    "game_name": "Tennis",
    "date": "2026-10-10",
    "time": "9:00 AM - 12:00 PM",
    "venue": "Court 1",
    "team1": "IIT BHU A",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Tennis",
    "date": "2026-10-10",
    "time": "9:00 AM - 12:00 PM",
    "venue": "Court 2",
    "team1": "IIT BHU Staff",
    "team2": "SOA"
  },
  {
    "game_name": "Tennis",
    "date": "2026-10-10",
    "time": "5:00 PM - 8:00 PM",
    "venue": "Court 1",
    "team1": "IIT BHU A",
    "team2": "SOA"
  },
  {
    "game_name": "Tennis",
    "date": "2026-10-10",
    "time": "5:00 PM - 8:00 PM",
    "venue": "Court 2",
    "team1": "IIT BHU Staff",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Boxing",
    "date": "2026-10-09",
    "time": "Bout 1",
    "venue": "Ring 1 (55 - 60 kg)",
    "team1": "Yury Trochin (DTU)",
    "team2": "Patel Ansh (IIIT Pune)"
  },
  {
    "game_name": "Boxing",
    "date": "2026-10-09",
    "time": "Bout 2",
    "venue": "Ring 1 (60 - 65 kg)",
    "team1": "Subham Kr. Singh (MCMT)",
    "team2": "Harsh Yadav (DTU)"
  },
  {
    "game_name": "Boxing",
    "date": "2026-10-09",
    "time": "Bout 3",
    "venue": "Ring 1 (65 - 70 kg)",
    "team1": "Satvik Yadav (IIT BHU)",
    "team2": "Abhishek Karhana (DTU)"
  },
  {
    "game_name": "Boxing",
    "date": "2026-10-09",
    "time": "Bout 4",
    "venue": "Ring 1 (75 - 80 kg)",
    "team1": "Ranjeet Kumar (IIT BHU)",
    "team2": "Divyanshu Gautam (DTU)"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "3:00 PM",
    "venue": "ADV (Pool B)",
    "team1": "SOA",
    "team2": "JEC"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "8:00 AM",
    "venue": "Amphitheatre (Pool C)",
    "team1": "KNIT",
    "team2": "RGIPT"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "8:00 AM",
    "venue": "ADV (Pool D)",
    "team1": "REC",
    "team2": "Arka Jain"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "8:00 AM",
    "venue": "IIT Gymkhana (Pool B)",
    "team1": "IIIT Gwalior",
    "team2": "JEC"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "12:15 PM",
    "venue": "IIT Gymkhana (Pool A)",
    "team1": "IIT BHU",
    "team2": "IIT Roorkee"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "12:15 PM",
    "venue": "ADV (Pool D)",
    "team1": "IIT BHU Staff",
    "team2": "REC"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-09",
    "time": "12:15 PM",
    "venue": "Amphitheatre (Pool C)",
    "team1": "KNIT",
    "team2": "Galgotia"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-10",
    "time": "8:00 AM",
    "venue": "ADV (Pool B)",
    "team1": "SOA",
    "team2": "IIIT Gwalior"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-10",
    "time": "8:00 AM",
    "venue": "IIT Gymkhana (Pool D)",
    "team1": "Arka Jain",
    "team2": "IIT BHU Staff"
  },
  {
    "game_name": "Cricket",
    "date": "2026-10-10",
    "time": "8:00 AM",
    "venue": "Amphitheatre (Pool C)",
    "team1": "Galgotia",
    "team2": "RGIPT"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "9:30 AM",
    "venue": "Court 3 (A)",
    "team1": "IIT BHU A",
    "team2": "BIT DEOGHAR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "9:30 AM",
    "venue": "Court 2 (B)",
    "team1": "JEC JABALPUR",
    "team2": "IIT ISM"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "9:30 AM",
    "venue": "Court 4 (D)",
    "team1": "IIT BHU C",
    "team2": "RGIPT"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "10:35 AM",
    "venue": "Court 3 (C)",
    "team1": "IIT BHU B",
    "team2": "IET LUCKNOW"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "12:30 PM",
    "venue": "Court 4 (C)",
    "team1": "KNIT",
    "team2": "SOA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "12:30 PM",
    "venue": "Court 3 (B)",
    "team1": "BBDU",
    "team2": "IIT BHU FACULTY"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "12:30 PM",
    "venue": "Court 2 (A)",
    "team1": "IIT BHU A",
    "team2": "REC AMBEDKAR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "1:30 PM",
    "venue": "Court 3 (D)",
    "team1": "REC BANDA",
    "team2": "BIT MESRA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "2:30 PM",
    "venue": "Court 2 (B)",
    "team1": "IIT BHU FACULTY",
    "team2": "IIT ISM"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "2:30 PM",
    "venue": "Court 4 (B)",
    "team1": "JEC JABALPUR",
    "team2": "BBDU"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "2:30 PM",
    "venue": "Court 2 (C)",
    "team1": "IIT BHU B",
    "team2": "KNIT"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "3:00 PM",
    "venue": "Court 3 (A)",
    "team1": "IIITM GWALIOR",
    "team2": "BIT DEOGHAR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Court 4 (C)",
    "team1": "IET LUCKNOW",
    "team2": "SOA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Court 2 (D)",
    "team1": "BIT MESRA",
    "team2": "RGIPT"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Court 4 (D)",
    "team1": "IIT BHU C",
    "team2": "REC BANDA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "9:30 AM",
    "venue": "Court 2 (A)",
    "team1": "REC AMBEDKAR",
    "team2": "BIT DEOGHAR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "9:30 AM",
    "venue": "Court 3 (A)",
    "team1": "IIT BHU A",
    "team2": "IIITM GWALIOR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "9:30 AM",
    "venue": "Court 4 (C)",
    "team1": "KNIT",
    "team2": "IET LUCKNOW"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "10:35 AM",
    "venue": "Court 2 (B)",
    "team1": "IIT FACULTY",
    "team2": "JEC JABALPUR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "10:35 AM",
    "venue": "Court 3 (D)",
    "team1": "IIT BHU C",
    "team2": "BIT MESRA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "10:35 AM",
    "venue": "Court 4 (D)",
    "team1": "RGIPT",
    "team2": "REC BANDA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "11:45 AM",
    "venue": "Court 4 (A)",
    "team1": "IIITM GWALIOR",
    "team2": "REC AMBEDKAR"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "11:45 AM",
    "venue": "Court 3 (C)",
    "team1": "IIT BHU B",
    "team2": "SOA"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "11:45 AM",
    "venue": "Court 2 (B)",
    "team1": "IIT ISM",
    "team2": "BBDU"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "9:30 AM",
    "venue": "Court 1 (A)",
    "team1": "REC BANDA (G)",
    "team2": "KNIT (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "10:30 AM",
    "venue": "Court 1 (B)",
    "team1": "IIT BHU B (G)",
    "team2": "KIET (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "11:30 AM",
    "venue": "Court 1 (C)",
    "team1": "SOA (G)",
    "team2": "GALGOTIA (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "12:30 PM",
    "venue": "Court 1 (D)",
    "team1": "RGIPT (G)",
    "team2": "JEC JABALPUR (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "1:30 PM",
    "venue": "Court 1 (B)",
    "team1": "KIRORI MAL (G)",
    "team2": "KIET (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "2:30 PM",
    "venue": "Court 1 (A)",
    "team1": "IIT ISM (G)",
    "team2": "SOA (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "3:30 PM",
    "venue": "Court 1 (D)",
    "team1": "IET L (G)",
    "team2": "JEC JABALPUR (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-09",
    "time": "4:30 PM",
    "venue": "Court 1 (A)",
    "team1": "IIT BHU A (G)",
    "team2": "REC BANDA (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "9:30 AM",
    "venue": "Court 1 (D)",
    "team1": "IET L (G)",
    "team2": "RGIPT (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "10:30 AM",
    "venue": "Court 1 (A)",
    "team1": "IIT BHU A (G)",
    "team2": "KNIT (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "11:30 AM",
    "venue": "Court 1 (B)",
    "team1": "IIT BHU B (G)",
    "team2": "KIRORI MAL (G)"
  },
  {
    "game_name": "Badminton",
    "date": "2026-10-10",
    "time": "11:30 AM",
    "venue": "Court 1 (C)",
    "team1": "IIT ISM (G)",
    "team2": "GALGOTIA (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "7:00 AM - 8:00 AM",
    "venue": "Court (POOL A)",
    "team1": "IIT BHU A",
    "team2": "KNIT"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "8:00 AM - 9:00 AM",
    "venue": "Court (POOL C)",
    "team1": "IIT BHU B",
    "team2": "REC Ambedkarnagar"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "9:00 AM - 10:00 AM",
    "venue": "Court (POOL D)",
    "team1": "IIITM Gwalior",
    "team2": "BIT Deoghar"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "5:00 PM - 6:00 PM",
    "venue": "Court (POOL B)",
    "team1": "JEC Jabalpur",
    "team2": "IET Lucknow"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "6:00 PM - 7:00 PM",
    "venue": "Court (POOL D)",
    "team1": "BIT Deoghar",
    "team2": "Galgotia University"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "7:00 PM - 8:00 PM",
    "venue": "Court (POOL C)",
    "team1": "SOA",
    "team2": "REC Ambedkarnagar"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "8:00 PM - 9:00 PM",
    "venue": "Court (POOL A)",
    "team1": "IIT BHU A",
    "team2": "IIT Roorkee"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-10",
    "time": "7:00 AM - 8:00 AM",
    "venue": "Court (POOL D)",
    "team1": "Galgotia University",
    "team2": "IIITM Gwalior"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-10",
    "time": "8:00 AM - 9:00 AM",
    "venue": "Court (POOL C)",
    "team1": "SOA",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-10",
    "time": "9:00 AM - 10:00 AM",
    "venue": "Court (POOL A)",
    "team1": "IIT Roorkee",
    "team2": "KNIT"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "7:00 AM - 8:00 AM",
    "venue": "Court 1",
    "team1": "IIT BHU (G)",
    "team2": "REC (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "8:00 AM - 9:00 AM",
    "venue": "Court 1",
    "team1": "SOA (G)",
    "team2": "GALGOTIAS (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "4:00 PM - 5:00 PM",
    "venue": "Court 1",
    "team1": "IIT ROORKEE (G)",
    "team2": "GALGOTIAS (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-09",
    "time": "5:00 PM - 6:00 PM",
    "venue": "Court 1",
    "team1": "IIT BHU (G)",
    "team2": "KNIT (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-10",
    "time": "7:00 AM - 8:00 AM",
    "venue": "Court 1",
    "team1": "KNIT (G)",
    "team2": "REC (G)"
  },
  {
    "game_name": "Basketball",
    "date": "2026-10-10",
    "time": "8:00 AM - 9:00 AM",
    "venue": "Court 1",
    "team1": "SOA (G)",
    "team2": "IIT ROORKEE (G)"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "9:00 AM - 10:00 AM",
    "venue": "Handball Ground",
    "team1": "IIT BHU B",
    "team2": "ARKA JAIN UNIVERSITY"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "10:00 AM - 11:00 AM",
    "venue": "Handball Ground",
    "team1": "NIT KURUKSHETRA (G)",
    "team2": "ARKA JAIN UNIVERSITY (G)"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "11:00 AM - 12:00 PM",
    "venue": "Handball Ground",
    "team1": "JEC JABALPUR",
    "team2": "NIT KURUKSHETRA"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "3:00 PM - 3:45 PM",
    "venue": "Handball Ground",
    "team1": "IIT BHU A",
    "team2": "JEC JABALPUR"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "3:45 PM - 4:30 PM",
    "venue": "Handball Ground",
    "team1": "NIT KURUKSHETRA",
    "team2": "ARKA JAIN UNIVERSITY"
  },
  {
    "game_name": "Handball",
    "date": "2026-10-09",
    "time": "4:30 PM - 5:15 PM",
    "venue": "Handball Ground",
    "team1": "IIT BHU A",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "8:00 - 8:40 am",
    "venue": "Kho-kho Ground",
    "team1": "JEC Jabalpur (G)",
    "team2": "MBM JODHPUR (G)"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "8:40 - 9:20 am",
    "venue": "Kho-kho Ground",
    "team1": "KNIT",
    "team2": "SOA"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "2:30 - 3:10 pm",
    "venue": "Kho-kho Ground",
    "team1": "Jodhpur (G)",
    "team2": "SOA (G)"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "3:10 - 3:50 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU B",
    "team2": "KNIT"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "3:50 - 4:30 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU A",
    "team2": "Jodhpur"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "4:30 - 5:10 pm",
    "venue": "Kho-kho Ground",
    "team1": "JEC",
    "team2": "SOA"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "8:00 - 8:40 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU (G)",
    "team2": "Jabalpur (G)"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "8:40 - 9:20 pm",
    "venue": "Kho-kho Ground",
    "team1": "KNIT",
    "team2": "Jodhpur"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-09",
    "time": "9:20 - 10:00 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU A",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "8:00 - 8:40 am",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU B",
    "team2": "SOA"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "8:40 - 9:20 am",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU (G)",
    "team2": "SOA (G)"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "9:20 - 10:00 am",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU A",
    "team2": "JEC"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "10:30 - 11:10 am",
    "venue": "Kho-kho Ground",
    "team1": "Jodhpur",
    "team2": "IIT BHU B"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "11:10 - 11:50 am",
    "venue": "Kho-kho Ground",
    "team1": "SOA",
    "team2": "IIT BHU A"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "11:50 - 12:30 pm",
    "venue": "Kho-kho Ground",
    "team1": "JEC",
    "team2": "Jodhpur"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "4:00 - 4:40 pm",
    "venue": "Kho-kho Ground",
    "team1": "KNIT",
    "team2": "JEC"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "4:40 - 5:20 pm",
    "venue": "Kho-kho Ground",
    "team1": "Jodhpur",
    "team2": "SOA"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "5:20 - 6:00 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU (G)",
    "team2": "Jodhpur (G)"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "6:00 - 6:40 pm",
    "venue": "Kho-kho Ground",
    "team1": "KNIT",
    "team2": "Jodhpur"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "6:40 - 7:20 pm",
    "venue": "Kho-kho Ground",
    "team1": "JEC",
    "team2": "SOA"
  },
  {
    "game_name": "Kho-kho",
    "date": "2026-10-10",
    "time": "7:20 - 8:00 pm",
    "venue": "Kho-kho Ground",
    "team1": "IIT BHU B (G)",
    "team2": "JEC (G)"
  }
];

const eventsData = [
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:30 AM",
    "event": "1500 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:35 AM",
    "event": "High Jump",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:50 AM",
    "event": "1500 m",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:55 AM",
    "event": "Javelin Throw",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "7:00 AM",
    "event": "100 m",
    "category": "Men",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "7:10 AM",
    "event": "High Jump",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "7:20 AM",
    "event": "100 m",
    "category": "Women (G)",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "7:30 AM",
    "event": "Javelin Throw",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "7:45 AM",
    "event": "Mixed Relay",
    "category": "Men & Women",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "5:00 PM",
    "event": "100 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "5:10 PM",
    "event": "Shot Put",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "5:20 PM",
    "event": "100 m",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "5:30 PM",
    "event": "Triple Jump",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "5:45 PM",
    "event": "400 m",
    "category": "Men",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:00 PM",
    "event": "400 m",
    "category": "Women (G)",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-09",
    "time": "6:10 PM",
    "event": "Shot Put",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:30 AM",
    "event": "800 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:35 AM",
    "event": "Long Jump",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:55 AM",
    "event": "800 m",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "7:20 AM",
    "event": "Long Jump",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "7:25 AM",
    "event": "200 m",
    "category": "Men",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "7:35 AM",
    "event": "200 m",
    "category": "Women (G)",
    "round": "HEATS"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "5:00 PM",
    "event": "200 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "5:15 PM",
    "event": "Discus Throw",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "5:25 PM",
    "event": "200 m",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "5:45 PM",
    "event": "400 m Hurdles",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:00 PM",
    "event": "Discus Throw",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:15 PM",
    "event": "4x100 m Relay",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-10",
    "time": "6:25 PM",
    "event": "4x100 m Relay",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "6:30 AM",
    "event": "5000 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "6:45 AM",
    "event": "Hammer Throw",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "6:55 AM",
    "event": "100 m Hurdles",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "7:10 AM",
    "event": "110 m Hurdles",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "7:20 AM",
    "event": "400 m",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "7:30 AM",
    "event": "400 m",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "4:30 PM",
    "event": "4x400 m Relay",
    "category": "Women (G)",
    "round": "FINAL"
  },
  {
    "game_name": "Athletics",
    "date": "2026-10-11",
    "time": "4:50 PM",
    "event": "4x400 m Relay",
    "category": "Men",
    "round": "FINAL"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-09",
    "time": "10:00 AM",
    "event": "Powerlifting",
    "category": "Men",
    "round": "Weight: Below 59 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-09",
    "time": "11:00 AM",
    "event": "Powerlifting",
    "category": "Men",
    "round": "Weight: 59\u201366 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-09",
    "time": "1:00 PM",
    "event": "Powerlifting",
    "category": "Men",
    "round": "Weight: 66\u201374 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-09",
    "time": "2:00 PM",
    "event": "Powerlifting",
    "category": "Men",
    "round": "Weight: 74\u201383 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-09",
    "time": "3:00 PM",
    "event": "Powerlifting",
    "category": "Men",
    "round": "Weight: 83+ kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-10",
    "time": "10:00 AM",
    "event": "Powerlifting",
    "category": "Women (G)",
    "round": "Weight: Weight categories based on number of participants"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-11",
    "time": "10:00 AM",
    "event": "Weightlifting",
    "category": "Men",
    "round": "Weight: Under 60 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-11",
    "time": "11:00 AM",
    "event": "Weightlifting",
    "category": "Men",
    "round": "Weight: 60\u201365 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-11",
    "time": "12:00 PM",
    "event": "Weightlifting",
    "category": "Men",
    "round": "Weight: 65\u201371 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-11",
    "time": "2:00 PM",
    "event": "Weightlifting",
    "category": "Men",
    "round": "Weight: 71\u201379 kg"
  },
  {
    "game_name": "Powerlifting",
    "date": "2026-10-11",
    "time": "3:00 PM",
    "event": "Weightlifting",
    "category": "Men",
    "round": "Weight: 79+ kg"
  }
];

const listSports = ['Athletics', 'Powerlifting'];

const Matches = () => {
  const [activeTab, setActiveTab] = useState('Fixtures');
  const navItem = [
    // 'All',
    'Athletics',
    'Badminton',
    'Basketball',
    'Boxing',
    'Chess',
    'Cricket',
    'Cycling',
    'Football',
    'Handball',
    'Hockey',
    'Kabbadi',
    'Kho-kho',
    'Powerlifting',
    'Squash',
    'Table Tennis',
    'Taekwondo',
    'Tennis',
    'Volleyball',
    // 'Weight Lifting',
  ];
  const [selectedDate, setSelectedDate] = useState('2026-10-09'); 
  const [selectedSport, setSelectedSport] = useState('Athletics');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const scrollNavbar = (direction) => {
    const navbar = document.getElementById('navbar');
    const step = 200; // Adjust the scroll step as needed
    if (direction === 'left') {
      navbar.scrollLeft -= step;
    } else {
      navbar.scrollLeft += step;
    }
  };

  const isListSport = listSports.includes(selectedSport);

  const filteredMatches = fixturesData.filter((match) => {
    const matchesSport =
      selectedSport === 'All' ||
      match.game_name.toLowerCase() === selectedSport.toLowerCase();
    const matchesDate =
      selectedDate === 'All' || match.date === selectedDate;
    return matchesSport && matchesDate;
  });

  const filteredEvents = eventsData.filter((evt) => {
    const matchesSport =
      selectedSport === 'All' ||
      evt.game_name.toLowerCase() === selectedSport.toLowerCase();
    const matchesDate =
      selectedDate === 'All' || evt.date === selectedDate;
    return matchesSport && matchesDate;
  });
  
  return (
    <>
      <Carousel />
      <div>
        <section
          id="matches"
          className={`${styles.ftco_section} ${styles.events}`}
        >
          <div
            className={`${styles.container} ${styles.pb_1} ${styles.maindiv}`}
          >
            <div className={`${styles.maindiv_top}`}>
              <h2 className={`${styles.mb_1} ${styles.H2}`}>MATCHES</h2>
              <div className={`${styles.options}`}>
                <span onClick={() => setActiveTab('Fixtures')}>
                  <h3
                    style={{
                      color: activeTab === 'Fixtures' ? '#4982F6' : null,
                      borderBottom:
                        activeTab === 'Fixtures'
                          ? ' 0.1875rem solid #4982F6'
                          : null,
                      cursor: 'pointer',
                    }}
                  >
                    Fixtures
                  </h3>
                </span>
                {/* <h3 style={{ fontWeight: 300 }}>|</h3>
                <span onClick={() => setActiveTab('Results')}>
                  <h3
                    style={{
                      color: activeTab === 'Results' ? '#760e53' : null,
                      borderBottom:
                        activeTab === 'Results'
                          ? ' 0.1875rem solid #760e53'
                          : null,
                        cursor:'pointer',
                    }}
                  >
                    Results
                  </h3>
                </span> */}
              </div>
            </div>
            <div className={`${styles.horizontal_navbar_container}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="white"
                className={`${styles.svg_arrow}`}
                onClick={() => scrollNavbar('left')}
              >
                <path
                  d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z"
                  fill="white"
                />
              </svg>
              <div id="navbar" className={`${styles.horizontal_navbar}`}>
                {navItem.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.navbar_item}`}
                    onClick={() => setSelectedSport(item)}
                    style={{
                      backgroundColor:
                        selectedSport === item ? '#4982F6' : null,
                      color: selectedSport === item ? 'white' : null,
                      borderColor: selectedSport === item ? '#4982F6' : null,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="white"
                className={`${styles.svg_arrow}`}
                onClick={() => scrollNavbar('right')}
              >
                <path
                  d="M0.368711 18.3981C0.85871 18.8881 1.64871 18.8881 2.13871 18.3981L10.4487 10.0881C10.8387 9.69812 10.8387 9.06813 10.4487 8.67813L2.13871 0.368124C1.64871 -0.121876 0.85871 -0.121876 0.368711 0.368124C-0.121289 0.858124 -0.121289 1.64812 0.368711 2.13812L7.60871 9.38813L0.358712 16.6381C-0.121287 17.1181 -0.121289 17.9181 0.368711 18.3981Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={`${styles.date}`}>
              {/* <label htmlFor="dateSelect">Select a Date:</label> */}
              <select
                id="dateSelect"
                value={selectedDate}
                onChange={handleDateChange}
                style={{ color: 'white', backgroundColor: 'transparent' }}
              >
                <option style={{ color: 'black', backgroundColor: 'transparent' }} value="2026-10-09">October 09, 2026</option>
                <option style={{ color: 'black', backgroundColor: 'transparent' }} value="2026-10-10">October 10, 2026</option>
                <option style={{ color: 'black', backgroundColor: 'transparent' }} value="2026-10-11">October 11, 2026</option>
                {/* <option style={{ color: 'black', backgroundColor: 'transparent' }} value="2026-10-12">October 12, 2026 </option> */}
                <option style={{ color: 'black', backgroundColor: 'transparent' }} value="All">All</option>
              </select>
              {/* <p>Selected Date: {selectedDate}</p> */}
            </div>
            <div className={`${styles.scrollablediv}`}>
              {activeTab === 'Fixtures' ? (
                isListSport ? (
                  <div className={styles.tableResponsive}>
                    {filteredEvents.length > 0 ? (
                      <table className={styles.eventsTable}>
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Category</th>
                            <th>Round / Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredEvents.map((evt, idx) => (
                            <tr key={idx}>
                              <td className={styles.timeCell}>{evt.time}</td>
                              <td className={styles.eventCell}>{evt.event}</td>
                              <td className={styles.categoryCell}>
                                <span
                                  className={
                                    evt.category.includes('(G)')
                                      ? styles.tagGirls
                                      : styles.tagDefault
                                  }
                                >
                                  {evt.category}
                                </span>
                              </td>
                              <td className={styles.roundCell}>{evt.round}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className={styles.noMatches}>
                        No events scheduled for the selected filter.
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.matchesSupreme}>
                    {filteredMatches.length > 0 ? (
                      filteredMatches.map((data, index) => (
                        <div className={styles.displayBox} key={index}>
                          <div className={styles.badgeRow}>
                            <span className={styles.sportBadge}>{data.game_name}</span>
                          </div>
                          <div className={styles.teamsRow}>
                            <div className={styles.teamBox}>{data.team1}</div>
                            <span className={styles.vsBadge}>VS</span>
                            <div className={styles.teamBox}>{data.team2}</div>
                          </div>
                          <div className={styles.metaRow}>
                            <span className={styles.metaLabel}>Venue:</span>
                            <span className={styles.metaValue}>{data.venue}</span>
                          </div>
                          <div className={styles.metaRow}>
                            <span className={styles.metaLabel}>Time:</span>
                            <span className={styles.metaValue}>{data.time}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noMatches}>
                        No matches scheduled for the selected filter.
                      </div>
                    )}
                  </div>
                )
              ) : (
                <MatchResults selectedSport={selectedSport} selectedDate={selectedDate}/>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Matches;

