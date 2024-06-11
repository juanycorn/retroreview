import React, { useEffect, useState } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import {useQuery} from '@apollo/client'
import {QUERY_COURESEL} from '../utils/queries'
import GameCarousel from '../components/GameCarousel';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [popularGames, setPopularGames] = useState([]);
  const { data, loading, error } = useQuery(QUERY_COURESEL);
  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        if(data) {
          setPopularGames(data.getCouresel);
        }
      } catch (error) {
        console.error('Error fetching popular games:', error);
      }
    };

    fetchPopularGames();
  }, [data]);

  return (
    <div className="landing-page">
      <Container className="welcome-container">
        <Header as="h1" textAlign="center" className="welcome-header">
          Welcome to <Image src="/assets/retroreview.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />
        </Header>
      </Container>
      <Container className="carousel-container">
        <GameCarousel games={popularGames} />
      </Container>
    </div>
  );
};

export default LandingPage;
