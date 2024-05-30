import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Menu inverted className="header-menu">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image src="/assets/retrocade.png" alt="Retrocade Logo" size="medium" />
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
        <Menu.Item as={Link} to="/login" name="Login" className="menu-item">
          Login
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
