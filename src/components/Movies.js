import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {

    let MovieCards = this.props.movies.map(movie => (
      <Card className="movieCard">
          <Card.Body>
            <Card.Title className="cardTitle">{movie.title} ({movie.releaseDate})</Card.Title>
            <Card.Text>
              <p className="cardDescription">{movie.overview}</p>
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
