import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Routes } from './Router';
import {ACCESS_TOKEN, EMAIL, ROLE, ROLE_ADMIN} from "./constants/data";
import {getListUser} from "./utils/APIUtils";

function App() {
  const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem(ACCESS_TOKEN));

  useEffect(() => {
    setAuthenticated(!!sessionStorage.getItem(ACCESS_TOKEN));
  }, [sessionStorage.getItem(ACCESS_TOKEN)]);

  return (
      <>
        <Routes/>
      </>
  );
}

export default App;