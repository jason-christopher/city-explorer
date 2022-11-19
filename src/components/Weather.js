import React from 'react';
import WeatherDay from './WeatherDay.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import cloudyIcon from '../icons/cloudy.png';
import snowyIcon from '../icons/snowy.png';
import rainyIcon from '../icons/rainy.png';
import sunnyIcon from '../icons/sunny.png';
import backupIcon from '../icons/backup.png';
import windIcon from '../icons/wind.png';

class Weather extends React.Component {

  render() {

    if(!this.props.isCarouselShown && !this.props.isDailyForecastShown ) {
      return <div />
    }

    // Pictures and Icons to match with the weather description (next section)
    let cloudImg = {
      URL: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      alt: 'cloudy image',
      icon: cloudyIcon,
    }
    let snowImg = {
      URL: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80',
      alt: 'snowy image',
      icon: snowyIcon,
    }
    let rainImg = {
      URL: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'rainy image',
      icon: rainyIcon,
    }
    let sunImg = {
      URL: 'https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'sunny image',
      icon: sunnyIcon,
    }
    let backupImg = {
      URL: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'backup image',
      icon: backupIcon,
    }

    // Matches weather descriptions with icons and background pictures
    let srcImg = description => {
      if(description === undefined){
        return backupImg
      } else if (description.includes('Few clouds')){
        return backupImg;
      } else if(description.includes('Cloud') || description.includes('cloud')){
        return cloudImg;
      } else if (description.includes('Flurries') || description.includes('Snow') || description.includes('snow')){
        return snowImg;
      } else if (description.includes('Rain') || description.includes('rain')){
        return rainImg;
      } else if (description.includes('Sun') || description.includes('clear') || description.includes('Clear')){
        return sunImg;
      } else {
        return backupImg;
      }
    }

    // Carousel constructor
    let carouselItems = this.props.forecast.map( day => {
      return (
        <Carousel.Item className="dailyForecastPicDiv">
          <img
            className="d-block w-100"
            src={srcImg(day.description).URL}
            alt={srcImg(day.description).alt}
            id="forecastPic"
          />
          <p className="date">{day.date}</p>
          <section className="dailyForecastData">
            <div className="tempAndWind">
              <p className="temp">{day.high}&#8457; &nbsp;|&nbsp; {day.low}&#8457;</p>
              <img 
                src={srcImg(day.description).icon} 
                alt={srcImg(day.description).alt}
                className="weatherIcon"
              />
              <p className="wind"><img src={windIcon} alt="wind icon" className="windIcon" />{day.wind}</p>
            </div>
            <p className="dailyDescription">{day.description}. &nbsp;High of {day.high}&#8457;, low of {day.low}&#8457;. &nbsp;Winds {day.wind}.</p>
          </section>
        </Carousel.Item>
      )
    })

    // Used for the daily forecast in Weather.js
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
            <Modal.Title className="modalTitle">5-Day Forecast for {this.props.cityData.display_name.split(',')[0]}</Modal.Title>
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
