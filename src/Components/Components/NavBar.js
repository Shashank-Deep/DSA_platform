import React from 'react';
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar =() => {

    return (
        <>
    
      {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TECH GEEKS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/material">Start Learning</Nav.Link>
            <Nav.Link href="/com">Compiler</Nav.Link>
            <Nav.Link href="/topic">Topics</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>
            <a className="navbar-brand text-primary" href="#"> <h2>TECHGEEKS</h2></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse text-center align-content-center m-auto" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="Navbar">
                <li className="nav-item navv">
                  <a className="nav-link active" aria-current="page" href="/"> <h4>Home</h4></a>
                </li>
                <li className="nav-item navv">
                  <a className="nav-link" href="/material"><h4>Start learning</h4></a>
                </li>
                <li className="nav-item navv">
                  <a className="nav-link" href="/com"><h4>Compiler</h4></a>
                </li>
                <li className="nav-item navv">
                  <a className="nav-link" href="/topic"><h4>DSA QA</h4></a>
                </li>
                {/* <li class="nav-item navv">
                    <a class="nav-link" href="#"><h5>Contact Us</h5></a>
                  </li> */}
              </ul> 
            </div>
          
          </div>
        </nav>
      </div>


     
  
        </>
    );
}

export default NavBar;