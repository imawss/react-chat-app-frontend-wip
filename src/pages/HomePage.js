import { Container, Form, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import './Home.css';



function HomePage() {
  
  const checkAuth = () => {
    console.log("func test!");
  }

  checkAuth();

  return (
    <h1>Test</h1>
  )
}

export default HomePage;
