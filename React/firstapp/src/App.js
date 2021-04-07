import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import me2 from './me2.jpg';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import salma2 from './salma2.png';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.png';
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'


function App() {
  return (
    <div className="App">
      <br></br>
    <Image src={salma2} roundedCircle id="me" />
    <br></br>
    <br></br>
    <h1>Welcome to <br></br>Salma's Journal</h1>
    <br></br>
    <br></br>
    <Nav className="justify-content-center"  defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="#about">About</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1"href="#galery">Galery</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2"href="#contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<section id="about">
<h3>About</h3>
<br></br>
<br></br>
<Container>
  <Row>
    <Col><Image src={me2} thumbnail  id="me2" /></Col>
    <Col><br></br><br></br>Hey! Welcome to my blog. It’s Salma, now you know me.Now that I’m 25,<br></br> I wake up everyday excited for a fresh start, I do my best to change the world around me by helping people be the best version of themselves
    Full time student at GoMyCode and network engineer<br></br>I love nature adventure and Photography. You can find some of my shots in my gallery </Col>
  </Row>
 
</Container>
</section>
<section id="galery">
<Container>
 
  <br></br>

  
  <h3>Galery</h3>
  <br></br>
  <br></br>
  <Row>
    <Col><Image src={first} roundedCircle id="im1" /></Col>
    <Col><Image src={second} roundedCircle id="im1" /></Col>
    <Col><Image src={third} roundedCircle id="im1" /></Col>
  </Row>
  </Container>
  </section>
  <br></br>
  <br></br>
  <section id="contact">
  <h3>Contact</h3>
  <br></br>
  <br></br>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control type="message" placeholder="Message" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br></br>
<br></br>
<br></br>
<a href="https://www.facebook.com/salma.glaied/" class="fa fa-facebook" id="fa1"></a>
 
<a href="https://www.instagram.com/salmaglaied/" class="fa fa-instagram" id="fa1"></a> 
</section>
    </div>
  );
}

export default App;
