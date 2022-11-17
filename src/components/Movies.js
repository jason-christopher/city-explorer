import React from 'react';
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
            <Modal.Title className="movieModalTitle">{this.props.cityName} Movies</Modal.Title>
          </Modal.Header>
          <Modal.Body className="movieModalBody">
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[0].posterImg} alt={this.props.movies[0].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[0].title} ({this.props.movies[0].releaseDate})</h3>
                <p>{this.props.movies[0].overview}</p>
              </article>
            </div>
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[1].posterImg} alt={this.props.movies[1].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[1].title} ({this.props.movies[1].releaseDate})</h3>
                <p>{this.props.movies[1].overview}</p>
              </article>
            </div>
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[2].posterImg} alt={this.props.movies[2].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[2].title} ({this.props.movies[2].releaseDate})</h3>
                <p>{this.props.movies[2].overview}</p>
              </article>
            </div>
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[3].posterImg} alt={this.props.movies[3].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[3].title} ({this.props.movies[3].releaseDate})</h3>
                <p>{this.props.movies[3].overview}</p>
              </article>
            </div>
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[4].posterImg} alt={this.props.movies[4].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[4].title} ({this.props.movies[4].releaseDate})</h3>
                <p>{this.props.movies[4].overview}</p>
              </article>
            </div>
            <div className="movieDiv">
              <div className="moviePicDiv">
                <img className="moviePic" src={this.props.movies[5].posterImg} alt={this.props.movies[5].title + ' image'}/>
              </div>
              <article className="movieArticle">
                <h3>{this.props.movies[5].title} ({this.props.movies[5].releaseDate})</h3>
                <p>{this.props.movies[5].overview}</p>
              </article>
            </div>
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
