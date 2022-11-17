import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Forecast extends React.Component {

  render() {

    let dates = this.props.forecast.map(item => item.date);
    let descriptions = this.props.forecast.map(item => item.description);

    let cloudImg = {
      URL: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      alt: 'cloudy image'
    }
    let snowImg = {
      URL: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80',
      alt: 'snowy image'
    }
    let rainImg = {
      URL: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'rainy image'
    }
    let sunImg = {
      URL: 'https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'sunny image'
    }
    let backupImg = {
      URL: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'backup image'
    }

    let srcImg = description => {
      if(description === undefined){
        return backupImg
      } else if(description.includes('Cloud')){
        return cloudImg;
      } else if(description.includes('cloud')){
        return cloudImg;
      } else if (description.includes('Flurries')){
        return snowImg;
      } else if (description.includes('snow')){
        return snowImg;
      } else if (description.includes('Rain')){
        return rainImg;
      } else if (description.includes('rain')){
        return rainImg;
      } else if (description.includes('Sun')){
        return sunImg;
      } else if (description.includes('Clear')){
        return sunImg;
      } else {
        return backupImg;
      }
    }

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
                  src={srcImg(descriptions[0]).URL}
                  alt={srcImg(descriptions[0]).alt}
                />
                <Carousel.Caption>
                  <h3>Date: {dates[0]}</h3>
                  <p>{descriptions[0]}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={srcImg(descriptions[1]).URL}
                  alt={srcImg(descriptions[1]).alt}
                />
                <Carousel.Caption>
                  <h3>Date: {dates[1]}</h3>
                  <p>{descriptions[1]}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={srcImg(descriptions[2]).URL}
                  alt={srcImg(descriptions[2]).alt}
                />
                <Carousel.Caption>
                  <h3>Date: {dates[2]}</h3>
                  <p>{descriptions[2]}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Button" variant="secondary" onClick={this.props.handleCloseCarousel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Forecast;
