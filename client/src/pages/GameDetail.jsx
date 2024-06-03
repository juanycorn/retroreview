import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {QUERY_DETAILS} from '../utils/queries'
import {useQuery} from '@apollo/client'
import { Container, Header, Segment, Image, Form, Button, Comment } from 'semantic-ui-react';

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const [queryDetails, { error }] = useQuery(QUERY_DETAILS);
    const fetchGameDetails = async () => {
      try {
        const response = await queryDetails({
          variables: { slug: slug}
        });
        setGame(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    // Simulated reviews (replace with actual backend integration)
    const storedReviews = localStorage.getItem(`reviews_${slug}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }

    fetchGameDetails();
  }, [slug]);

  const handleReviewSubmit = () => {
    const newReview = {
      user: 'Anonymous', // Replace with actual user information if available
      text: reviewText,
      date: new Date().toISOString(),
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${slug}`, JSON.stringify(updatedReviews));
    setReviewText('');
  };

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h2">{game.name}</Header>
      </Segment>

      <Segment style={{ backgroundColor: '#333' }}>
        <Image src={game.background_image} alt={game.name} fluid />
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Description</Header>
        <div style={{
          lineHeight: '1.6',
          letterSpacing: '0.5px',
          margin: '20px 0',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#444',
        }}>
          {game.description_raw.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Released</Header>
        <p>{game.released}</p>
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Rating</Header>
        <p>{game.rating} / 5 ({game.ratings_count} ratings)</p>
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Platforms</Header>
        <p>{game.platforms.map(platform => platform.platform.name).join(', ')}</p>
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Genres</Header>
        <p>{game.genres.map(genre => genre.name).join(', ')}</p>
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Reviews</Header>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <Comment.Group>
            {reviews.map((review, index) => (
              <Comment key={index}>
                <Comment.Content>
                  <Comment.Author>{review.user}</Comment.Author>
                  <Comment.Metadata>
                    <div>{new Date(review.date).toLocaleDateString()}</div>
                  </Comment.Metadata>
                  <Comment.Text>{review.text}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        )}
      </Segment>

      <Segment style={{ backgroundColor: '#333', color: 'white' }}>
        <Header as="h3">Write a Review</Header>
        <Form>
          <Form.TextArea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
          />
          <Button primary onClick={handleReviewSubmit}>Submit Review</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default GameDetail;