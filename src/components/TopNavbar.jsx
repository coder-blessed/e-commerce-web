import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, Container, Button, Modal, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faPhone, faShoppingCart, faTv, faTshirt, faMobileAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './hi/AuthContext';
import './TopNavbar.css'; // Create this file for custom styles

const TopNavbar = ({ cartItems = [] }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, register, signIn, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalItems = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    register(userData);
    setShowRegister(false);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    signIn(userData);
    setShowSignIn(false);
  };

  return (
    <>
      <div className='top-navbar-container'>
        <Navbar bg="antiquewhite" variant="white" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand className='my-e-com'>My E-commerce</Navbar.Brand>
          </LinkContainer>
          <Container>
            {user ? (
              <>
                <Button variant="outline-danger" onClick={signOut} className="me-2">
                  Log Out
                </Button>
                <Button variant="outline-primary" onClick={() => navigate('/profile')} className="me-2">
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline-primary" onClick={handleShowSignIn} className="me-2">
                  Sign In
                </Button>
                <Button variant="outline-secondary" onClick={handleShowRegister} className="me-2">
                  Register
                </Button>
              </>
            )}
            <Nav>
              <LinkContainer to="/cart" id='cart'>
                <Nav.Link onClick={() => navigate('/cart')}>
                  <FontAwesomeIcon icon={faShoppingCart} /> <div className="cart">cart ({totalItems})</div>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="outline-light-menu-button" id="dropdownMenuButton">
                <FontAwesomeIcon icon={faBars} size="lg" /> ALL CATEGORIES
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item> <FontAwesomeIcon icon={faTv} color='blue' />Electronics</Dropdown.Item>
                <Dropdown.Item> <FontAwesomeIcon icon={faTshirt} color='blue' />Clothes</Dropdown.Item>
                <Dropdown.Item> <FontAwesomeIcon icon={faMobileAlt} color='blue' />Gadgets</Dropdown.Item>
                <Dropdown.Item> <FontAwesomeIcon icon={faEllipsisH} color='blue' />Others</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </Form>
                <NavDropdown title="Language" id="language-dropdown">
                  <NavDropdown.Item>English</NavDropdown.Item>
                  <NavDropdown.Item>French</NavDropdown.Item>
                  <NavDropdown.Item>Dutch</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="tel:+1234567890" id='tel'>
                  <FontAwesomeIcon icon={faPhone} /> Hotline: +123 456 7890
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopNavbar;
