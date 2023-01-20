import { Container, Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import './Home.css';



function HomePage() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const json2Array = (json) => {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  };

  const returnUsername = () => {
    Axios.get("ahshasd")
  }

  const getAllMessages = () => {
    Axios.get("http://localhost:8000/apiv1/messages/getAll")
      .then((response) => {
        const allMessages = response.data;
        setMessages(json2Array(allMessages));
        setTimeout(() => { getAllMessages() }, 3000);
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
        <div className='tag'>
          <h1 className='fixed-top d-grid h-100' id='chat-h'>#chatroom-public-test</h1>
        </div>
        <br /><br /><br /><br /><br />
        <ul className='messages'>
          {messages.sort((a, b) => a.messageCreationTime > b.messageCreationTime ? 1 : -1)
            .map(message => (
              <li id='li-obj' key={message.messageCreationTime}>
                <div className='message mb-4 position-relative'>
                  <h4>{message.senderMail}</h4>
                  <h5 className='msg-txt'>{message.message.message}</h5>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <br /><br /><br /><br />
      <div className='messageBar fixed-bottom d-grid'>
        <input type="text" placeholder=" Text a message" id="msg-text" />
      </div>

    </Container>
  )
}

export default HomePage;
