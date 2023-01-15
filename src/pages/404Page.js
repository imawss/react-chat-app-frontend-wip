import { Container, Button } from 'react-bootstrap';
import './404Page.css';

function ErrorPage() {
  return (
    <Container id='main-container' className='d-grid h-100'>
        <div className='error-bg'>
            <h1 id='error-c'>404</h1>
            <h2 id='error-d'>Sorry, the page you are looking for doesn't exist.</h2> 
        </div>
    </Container>
  )
}

export default ErrorPage;
