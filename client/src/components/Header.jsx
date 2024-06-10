import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthService from '../utils/auth'
const handleLogout = () => {
  AuthService.logout();
};
const Header = () => {
  const isLoggedIn = AuthService.loggedIn();
  return (
    <Menu inverted className="header-menu">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image src="/assets/Retrocade.png" alt="Retrocade Logo" size="medium" />
        </Menu.Item>
        <Menu.Item as={Link} to="/Games" name="Games" className="menu-item">
          Games
        </Menu.Item>
        <Menu.Item as={Link} to="/about" name="About" className="menu-item">
          About
        </Menu.Item>
        <Menu.Item as={Link} to="/contact" name="Contact" className="menu-item">
          Contact
        </Menu.Item>
       { !isLoggedIn && (
        <Menu.Item as={Link} to="/login" name="Login" className="menu-item">
          Login
        </Menu.Item>
)}
       { isLoggedIn && (
        <Menu.Item onClick={handleLogout} name="Logout" className="menu-item">
          Logout
        </Menu.Item>
)}
      </Container>
    </Menu>
  );
};

export default Header;
