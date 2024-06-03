import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Input, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchGames = async (search, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=40&page=${page}&search=${search}`
      );
      console.log(response.data);
      setGames((prevGames) => [...prevGames, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGames(searchTerm, page);
  }, [searchTerm, page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setGames([]);
    setPage(1);
  };

  const loadMoreGames = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Grid textAlign="center" style={{ minHeight: 'calc(100vh - 100px)' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1200 }}>
        <Header as="h2" color="teal" textAlign="center">
          Games
        </Header>
        <Input
          fluid
          icon="search"
          placeholder="Search for games..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Segment textAlign="left" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Grid columns={5} doubling>
            {games.map((game, index) => (
              <Grid.Column key={index}>
                <Link to={`/games/${game.slug}`}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={game.background_image}
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
          {loading && <p>Loading...</p>}
          <Button fluid onClick={loadMoreGames} disabled={loading}>
            Load More
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Games;
