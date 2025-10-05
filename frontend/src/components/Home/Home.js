import { useContext, useEffect } from 'react';
// import Card from '../Card/Card'
// import styles from './Home.module.css'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import React from 'react'
// import './Admin.css'
import '../AdminContent/AdminContent.css'


import AdminContent from '../AdminContent/AdminContent'



function Home() {
	const {isLoggedIn}=useContext(AuthContext);
	const navigate=useNavigate();
	useEffect(function(){
		if (!isLoggedIn) navigate("/login");
	},[isLoggedIn, navigate])
    return (
		<div className="maindiv">

           
        <AdminContent/>
    </div>
	);
}

export default Home
