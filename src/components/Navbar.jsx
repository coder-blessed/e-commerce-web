import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App';
import './Navbar.css'; // This line should already be there


const NavigationBar = () => {
    return (
        <>
            <div className='custom-navbar-container'>
                <Navbar bg="light" expand="lg">

                    <LinkContainer to="/">
                        <Navbar.Brand className='my-e-com'>ALL-MART</Navbar.Brand>
                    </LinkContainer>
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-navv" />
                        <Navbar.Collapse id="basic-navbar-navv">
                            <Nav className="me-auto">
                                <LinkContainer to="/" exact={true} className='home'>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="Collections" id="collections-dropdown">
                                    <LinkContainer to="/Collections">
                                        <NavDropdown.Item>All Collections</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                    <LinkContainer to="/products">
                                        <NavDropdown.Item>ProductList</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                    <LinkContainer to="/Fashions">
                                        <NavDropdown.Item>Fashions</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                    <LinkContainer to="/Electronics">
                                        <NavDropdown.Item>Electronics</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                    <LinkContainer to="/HomesAndGardens">
                                        <NavDropdown.Item>HomesAndGardens</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                </NavDropdown>
                                <NavDropdown title="BestSellers" id="bestSellers-dropdown">
                                    <LinkContainer to="/BestSeller">
                                        <NavDropdown.Item>All Bestsellers</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                </NavDropdown>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <LinkContainer to="/Pages">
                                        <NavDropdown.Item>All Pages</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                </NavDropdown>
                                <NavDropdown title="Blog" id="blog-dropdown">
                                    <LinkContainer to="/Blog">
                                        <NavDropdown.Item>All Blog Posts</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add more dropdown items here */}
                                    <LinkContainer to="/blog/post1">
                                        <NavDropdown.Item>Blog Post 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/blog/post2">
                                        <NavDropdown.Item>Blog Post 2</NavDropdown.Item>
                                    </LinkContainer>
                                    {/* Add as many dropdown items as needed */}
                                </NavDropdown>
                                <NavDropdown title="contact" id="contact-dropdown">
                                    <LinkContainer to="/Contact">

                                        {/* <Nav.Link>Contact Us</Nav.Link> */}
                                        <NavDropdown.Item>Contact Us</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/ProfilePage">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/Privacy">
                                        <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/Shipping">
                                        <NavDropdown.Item>Return Policy</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/Return">
                                        <NavDropdown.Item>Shipping Policy</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/Terms">
                                        <NavDropdown.Item>Terms of Service</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavigationBar;
