import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <Container id='main-container' className='d-grid h-100'>
      <Form id='register-form' className='text-center w-100 form-bg'>
        <img className='mb-4 app-logo' 
        src='data:image/jpeg;base64,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' 
        alt='App Logo'/>
        <h1 className='mb-4 fs-3 fw-normal biggerText'>Please sign in</h1>

        <Form.Group controlId='sign-in-email-address'>
          <Form.Control required type='email' size='lg' placeholder='Email' autoComplete='username' className='mb-1 position-relative formInput'></Form.Control>
        </Form.Group>
        <Form.Group controlId='sign-in-username'>
          <Form.Control required type='username' size='lg' placeholder='Username' autoComplete='username' className='mb-1 position-relative formInput'></Form.Control>
        </Form.Group>
        <Form.Group controlId='sign-in-password' className='mb-3'>
          <Form.Control required type='password' size='lg' placeholder='Password' autoComplete='current-password' className='mb-2 position-relative formInput'></Form.Control>
        </Form.Group>

        <div className='d-grid'>
          <Button variant='primary' size='lg' type='submit'>Sign In</Button>
        </div>
        <Link className='mb-2 position-relative linkText' to="/login">Do you have an account?</Link>
        <p className='mt-4 littleText'>&copy; 2022-2023 ChatApp Demo</p>
      </Form>
    </Container>
  )
}

export default App;
