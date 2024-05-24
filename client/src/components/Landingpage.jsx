import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import GameCarousel from './GameCarousel';
import './LandingPage.css'; // Import your CSS file for custom styling

const LandingPage = () => {
  const popularGames = [
    {
      id: 1,
      name: 'Donkey Kong',
      imageUrl: '/assets/Donkeykong-Banner.png',
    },
    {
      id: 2,
      name: 'Pac-Man',
      imageUrl: '/assets/pacman-banner.jpg',
    },
  ];

  return (
    <div className="landing-page">
      <Container className="welcome-container">
        <Header as="h1" textAlign="center" className="welcome-header">
          Welcome to Retrocade
        </Header>
      </Container>
      <Container className="carousel-container">
        <GameCarousel games={popularGames} />
      </Container>
    </div>
  );
};

export default LandingPage;
