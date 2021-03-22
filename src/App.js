import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SocialsToJSX from './components/SocialsToJSX';
import ContentLoader from './components/ContentLoader';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" className="sidebar" collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/thrive_logo.png"
            width="auto"
            height="55"
            className="d-inline-block align-top "
            alt="Thrive Academy Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto thrive-nav-items">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/getinvolved">Get Involved</Nav.Link>
          </Nav>
          <Nav className="ml-auto thrive-nav-items">
            <Nav.Item className="justify-content-end">
              <Button variant="light" href="https://venmo.com/Thrive-Academy" target="_blank">Donate</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/getinvolved">
          <GetInvolved />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Navbar bg="dark">
        <Container>
          <Row style={{width: '100%'}}>
            <Col sm={6} xs={12} className="mr-auto thrive-nav-items">
              <h4 className="footer-header">Site Links</h4>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/getinvolved">Get Involved</Nav.Link>
            </Col>
            <Col sm={6} xs={12} className="mr-auto thrive-nav-items">
              <h4 className="footer-header">Our Socials</h4>
              <ContentLoader toJsx={SocialsToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'socials'} />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
