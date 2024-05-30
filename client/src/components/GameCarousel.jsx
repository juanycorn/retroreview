import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './GameCarousel.css';

const GameCarousel = ({ games }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
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

export default GameCarousel;
