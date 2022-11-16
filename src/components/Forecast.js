import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Forecast extends React.Component {

  render() {

    let dates = this.props.forecast.map(item => item.date);
    let descriptions = this.props.forecast.map(item => item.description);

    return (
      <>
        <Modal 
          show={this.props.isCarouselShown} 
          onHide={this.props.handleCloseCarousel}
          className="modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">{this.props.cityData.display_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Date: {dates[0]}</h3>
                  <p>{descriptions[0]}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Date: {dates[1]}</h3>
                  <p>{descriptions[1]}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Date: {dates[2]}</h3>
                  <p>{descriptions[2]}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseCarousel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Forecast;
