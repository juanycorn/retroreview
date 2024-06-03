import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/GameCarousel.css';

const GameCarousel = ({ games }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="carousel-container">
      {games.map(game => (
        <div key={game.id} className="carousel-item">
          <Link to={`/games/${game.slug}`}>
            <img src={game.imageUrl} alt={game.name} className="carousel-image" />
            <h3 className="carousel-caption">{game.name}</h3>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

GameCarousel.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameCarousel;
