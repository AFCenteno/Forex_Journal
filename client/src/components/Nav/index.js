import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Row>
          <Col>
            <Link id="navlink" to="/">
              Trade List
            </Link>
          </Col> 
          <Col>
            <Link id="navlink" to="/NewTrade">
              Add Trade
            </Link>
          </Col>
          <Col id='logout'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a id="navlink" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Col>   
          </Row>

      );
    } else {
      return (
        <Row>
          <Col>
            <Link id="navlink" to="/signup">
              Sign up
            </Link>
          </Col>
          <Col>  
            <Link id="navlink" to="/login">
              Login
            </Link>
          </Col>      
        </Row>
      );
    }
  }

  return (
    <Container>
    <header >
      <Row>
        <Col>
        <h1>
          <Link id="title" to="/">
           Forex Journal
          </Link>
        </h1>
        </Col>

        <nav>
          {showNavigation()}
        </nav>
      </Row>
    </header>
    </Container>
  );
}

export default Nav;
