import React, { useEffect, useState } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import GameCarousel from '../components/GameCarousel';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const response = await axios.get(
          'https://api.rawg.io/api/games?key=9f4cf210f2d444348491d5c9b6de68b3&page_size=5&ordering=-added'
        );
        const games = response.data.results.map(game => ({
          id: game.id,
          name: game.name,
          imageUrl: game.background_image,
        }));
        setPopularGames(games);
      } catch (error) {
        console.error('Error fetching popular games:', error);
      }
    };

    fetchPopularGames();
  }, []);

  return (
    <div className="landing-page">
      <Container className="welcome-container">
        <Header as="h1" textAlign="center" className="welcome-header">
          Welcome to <Image src="/assets/retrocade.png" alt="Retrocade Logo" size="Large" />
        </Header>
      </Container>
      <Container className="carousel-container">
        <GameCarousel games={popularGames} />
      </Container>
    </div>
  );
};

export default LandingPage;
