import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Header, Segment } from 'semantic-ui-react';

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${slug}?key=9f4cf210f2d444348491d5c9b6de68b3`
        );
        setGame(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [slug]);

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Segment style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Header as="h2" style={{ color: 'white' }}>{game.name}</Header>
        <img src={game.background_image} alt={game.name} style={{ width: '100%', height: 'auto' }} />
        <p style={{ color: 'white' }}>{game.description_raw}</p>
        {/* Add other game details as needed */}
      </Segment>
    </Container>
  );
};

export default GameDetail;
