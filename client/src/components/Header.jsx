// src/components/Header.js
import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item header as={Link} to="/" className="logo">
          Retrocade
        </Menu.Item>
        <Menu.Item as={Link} to="/Games" name="Games">
          Games
        </Menu.Item>
        <Menu.Item as={Link} to="/about" name="about">
          About
        </Menu.Item>
        <Menu.Item as={Link} to="/contact" name="contact">
          Contact
        </Menu.Item>
        <Menu.Item as={Link} to="/login" name="login">
          Login
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
