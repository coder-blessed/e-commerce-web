import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faPlug, faHeadphones, faHome, faLightbulb, faLeaf, faLaptop, faTshirt, faShoePrints, faBlender, faChair } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';



import './Sidebar.css';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="custom-sidebar-container">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="flex-column">
        <LinkContainer to="/" exact={true}>
          <Nav.Link><FontAwesomeIcon icon={faTv} />Collections</Nav.Link>
        </LinkContainer>
        <NavDropdown
          title="Electronics"
          id="Electronics-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('Electronics')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'Electronics'}
        >
          <LinkContainer to="/electronics">
            <NavDropdown.Item><FontAwesomeIcon icon={faTv} /> Electronics</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/electronics/tv">
            <NavDropdown.Item><FontAwesomeIcon icon={faTv} /> TV</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/electronics/iron">
            <NavDropdown.Item><FontAwesomeIcon icon={faPlug} /> Iron</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/electronics/speakers">
            <NavDropdown.Item><FontAwesomeIcon icon={faHeadphones} /> Speakers</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title="Homes and Gardens"
          id="HomesAndGardens-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('HomesAndGardens')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'HomesAndGardens'}
        >
          <LinkContainer to="/homesAndGardens">
            <NavDropdown.Item><FontAwesomeIcon icon={faHome} /> Homes and Gardens</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/homesAndGardens/chandeliers">
            <NavDropdown.Item><FontAwesomeIcon icon={faLightbulb} /> Chandeliers</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/homesAndGardens/flowers">
            <NavDropdown.Item><FontAwesomeIcon icon={faLeaf} /> Flowers</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/homesAndGardens/homeDecor">
            <NavDropdown.Item><FontAwesomeIcon icon={faHome} /> Home Decor</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title="Laptops and MacBooks"
          id="LaptopsAndMacBooks-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('LaptopsAndMacBooks')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'LaptopsAndMacBooks'}
        >
          <LinkContainer to="/laptopsAndMacBooks/lenovo">
            <NavDropdown.Item><FontAwesomeIcon icon={faLaptop} /> Lenovo</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/laptopsAndMacBooks/samsung">
            <NavDropdown.Item><FontAwesomeIcon icon={faLaptop} /> Samsung</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/laptopsAndMacBooks/apple">
            <NavDropdown.Item><FontAwesomeIcon icon={faApple} /> Apple</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title="Clothing and Shoes"
          id="ClothingAndShoes-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('ClothingAndShoes')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'ClothingAndShoes'}
        >
          <LinkContainer to="/clothingAndShoes/shoes">
            <NavDropdown.Item><FontAwesomeIcon icon={faShoePrints} /> Shoes</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/clothingAndShoes/sleeves">
            <NavDropdown.Item><FontAwesomeIcon icon={faTshirt} /> Sleeves</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/clothingAndShoes/hoodie">
            <NavDropdown.Item><FontAwesomeIcon icon={faTshirt} /> Hoodie</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title="Kitchen Utensils"
          id="KitchenUtensils-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('KitchenUtensils')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'KitchenUtensils'}
        >
          <LinkContainer to="/kitchenUtensils/kettles">
            <NavDropdown.Item><FontAwesomeIcon icon={faBlender} /> Kettles</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/kitchenUtensils/spoons">
            <NavDropdown.Item><FontAwesomeIcon icon={faBlender} /> Spoons</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/kitchenUtensils/blenders">
            <NavDropdown.Item><FontAwesomeIcon icon={faBlender} /> Blenders</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title="Furniture"
          id="Furniture-dropdown"
          className="menu-item"
          onMouseEnter={() => handleMenuClick('Furniture')}
          onMouseLeave={() => handleMenuClick(null)}
          show={activeMenu === 'Furniture'}
        >
          <LinkContainer to="/furniture">
            <NavDropdown.Item><FontAwesomeIcon icon={faChair} /> Furniture</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/furniture/diningTables">
            <NavDropdown.Item><FontAwesomeIcon icon={faChair} /> Dining Tables</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/furniture/chairs">
            <NavDropdown.Item><FontAwesomeIcon icon={faChair} /> Chairs</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/furniture/office">
            <NavDropdown.Item><FontAwesomeIcon icon={faChair} /> Office</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default Sidebar;
