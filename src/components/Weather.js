import React from 'react';
import WeatherDay from './WeatherDay.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Weather extends React.Component {

  render() {

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
      } else if(description.includes('Cloud') || description.includes('cloud')){
        return cloudImg;
      } else if (description.includes('Flurries') || description.includes('Snow') || description.includes('snow')){
        return snowImg;
      } else if (description.includes('Rain') || description.includes('rain')){
        return rainImg;
      } else if (description.includes('Sun') || description.includes('Clear') || description.includes('clear')){
        return sunImg;
      } else {
        return backupImg;
      }
    }

    let carouselItems = this.props.forecast.map( (day, idx) => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcImg(day.description).URL}
            alt={srcImg(day.description).alt}
          />
          <Carousel.Caption>
            <h3>Date: {day.date}</h3>
            <p>{day.description}</p>
            <Button 
                className="Button" 
                variant="primary"
                key={idx}
                onClick={this.props.handleOpenDailyForecast(idx)}
              >See More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    

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
              {carouselItems}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Button" variant="secondary" onClick={this.props.handleCloseCarousel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <WeatherDay
          isDailyForecastShown={this.props.isDailyForecastShown}
          handleOpenDailyForecast={this.props.handleOpenDailyForecast}
          handleCloseDailyForecast={this.props.handleCloseDailyForecast}
          forecast={this.props.forecast}
          cityData={this.props.cityData}
          selectedDay={this.props.selectedDay}
        />
      </>
    )
  }
}

export default Weather;
