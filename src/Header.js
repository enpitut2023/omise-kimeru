import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar style={{backgroundColor:'wheat'}}>
      <Container className="container-center" style={{ textAlign: "center", display: 'inline-block' }}>
        <Navbar.Brand href="#" className="fw-bold">おみせきめーる</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;