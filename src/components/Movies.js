import React from 'react';
import Movie from './Movie.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Movies extends React.Component {

  render() {

    return (
      <>
        <Modal 
        show={this.props.isMoviesShown} 
        onHide={this.props.handleCloseMovies}
        className="movieModal"
        centered
        >
          <Modal.Header className="movieModalHeader" closeButton>
            <Modal.Title className="movieModalTitle">Movies Matches</Modal.Title>
          </Modal.Header>
          <Modal.Body className="movieModalBody">
            <Movie
              movies={this.props.movies}
              isMoviesShown={this.props.isMoviesShown}
            />
          </Modal.Body>
          <Modal.Footer className="movieModalFooter">
            <Button className="Button" variant="secondary" onClick={this.props.handleCloseMovies}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Movies;
