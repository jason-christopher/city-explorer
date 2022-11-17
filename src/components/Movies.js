import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {

    let MovieCards = this.props.movies.map((movie, idx) => (
      <Card key={idx} className="movieCard">
          <Card.Body>
            <Card.Img 
              className="cardMovieImg"
              variant="top" 
              src={movie.posterImg} 
              alt={movie.title + ' image'}
            />
            <Card.Title className="movieCardTitle">{movie.title} ({movie.releaseDate})</Card.Title>
            <Card.Text>
              <p className="movieCardDescription">{movie.overview}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    ))

    return (
      <div className="movieCardDiv">
        {MovieCards}
      </div>
    )
  }
}

export default Movies;
