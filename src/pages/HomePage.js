import { Container, Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import './Home.css';



function HomePage() {
  const[messages, getMessages] = useState([]);
  const navigate = useNavigate();

  const getAllMessages = async ()=> {
    await Axios.get("http://localhost:8000/apiv1/messages/getAll")
    .then((response) => {
      const allMessages = response.data;
      getMessages(allMessages);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getAllMessages()
  }, [])

  const checkAuth = () => {
    Axios.get("http://localhost:8000/apiv1/users/getAuth")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      //navigate("/login");
      //ATTENTION: I NEED TO REPAIR AUTH SYSTEM!
    });
  }
  checkAuth();

  return (
    <Container id='main-container' className='d-grid h-100'>
      <div className='messageContainer'>
        <h1 className='fixed-top' id='container-h'>#chatroom-public-test</h1><hr/>
      </div>
    </Container>
  )
}

export default HomePage;
