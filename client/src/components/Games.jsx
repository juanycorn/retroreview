import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Input, Segment } from 'semantic-ui-react';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const games = [
    {
      name: 'Donkey Kong',
      boxArt: './assets/donkeykong.jpg',
      route: '/games/donkey-kong', // Define the route for Donkey Kong
    },
    {
      name: 'Pac-Man',
      boxArt: './assets/pacman.webp',
      route: '/games/pac-man', // Define the route for Pac-Man
    },
    // Add more game objects as needed
  ];

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as="h2" color="teal" textAlign="center">
          Games
        </Header>
        <Input
          fluid
          icon="search"
          placeholder="Search for games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Segment textAlign="left" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Grid columns={2}>
            {filteredGames.map((game, index) => (
              <Grid.Column key={index}>
                <Link to={game.route}> {/* Wrap the image with Link component */}
                  <div style={{ position: 'relative' }}>
                    <img
                      src={game.boxArt}
                      alt={game.name}
                      style={{
                        transition: 'transform 0.2s',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '350px',
                      }}
                      onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }}
                      onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }}
                    />
                  </div>
                  <p style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '16px', color: 'white', textAlign: 'center' }}>
                    {game.name}
                  </p>
                </Link>
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Games;
