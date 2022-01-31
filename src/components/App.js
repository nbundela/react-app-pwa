import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

import Home from './Home';
import About from './About';
import Users from './Users';
import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
