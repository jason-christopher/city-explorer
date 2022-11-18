import React from 'react';
import WeatherDay from './WeatherDay.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Weather extends React.Component {

  render() {

    if(!this.props.isCarouselShown && !this.props.isDailyForecastShown ) {
      return <div />
    }

    let cloudImg = {
      URL: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      alt: 'cloudy image',
      icon: '../public/images/cloudy.png'
    }
    let snowImg = {
      URL: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80',
      alt: 'snowy image',
      icon: '../public/images/snowy.png'
    }
    let rainImg = {
      URL: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'rainy image',
      icon: '../public/images/rainy.png'
    }
    let sunImg = {
      URL: 'https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'sunny image',
      icon: '../public/images/sunny.png'
    }
    let backupImg = {
      URL: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'backup image',
      icon: '../public/images/backup.png'
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

    let carouselItems = this.props.forecast.map( day => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcImg(day.description).URL}
            alt={srcImg(day.description).alt}
          />
          <Carousel.Caption>
            <h3>{day.date}</h3>
            <p>{day.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

      let dailyForecast = this.props.forecast[0];
      let dailyForecastImg = srcImg(dailyForecast.description);

    return (
      <>
        <Modal 
          show={this.props.isCarouselShown} 
          onHide={this.props.handleCloseCarousel}
          className="modal"
          centered
        >
          <Modal.Header className="movieModalHeader" closeButton>
            <Modal.Title className="modalTitle">3-Day Forecast for {this.props.cityData.display_name.split(',')[0]}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="movieModalBody">
            <Carousel className="carousel">
              {carouselItems}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="movieModalFooter">
            <Button className="Button" variant="secondary" onClick={this.props.handleCloseCarousel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <WeatherDay
          isDailyForecastShown={this.props.isDailyForecastShown}
          handleCloseDailyForecast={this.props.handleCloseDailyForecast}
          forecast={this.props.forecast[0]}
          cityData={this.props.cityData}
          dailyForecastImg={dailyForecastImg}
        />
      </>
    )
  }
}

export default Weather;
