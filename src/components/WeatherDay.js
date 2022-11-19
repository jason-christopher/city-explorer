import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import windIcon from '../icons/wind.png';

class WeatherDay extends React.Component {

  render() {

    if(!this.props.isDailyForecastShown) {
      return <div />
    }

    return (
      
      <>
        <Modal 
          show={this.props.isDailyForecastShown} 
          onHide={this.props.handleCloseDailyForecast}
          className="modal"
          centered
        >
          <Modal.Header className="movieModalHeader" closeButton>
            <Modal.Title className="dailyModalTitle">{this.props.cityData.display_name.split(',')[0]}'s Forecast | {this.props.forecast.date}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="movieModalBody">
            <div className="dailyForecastPicDiv">
              <img
                className="d-block w-100"
                src={this.props.dailyForecastImg.URL}
                alt={this.props.dailyForecastImg.alt}
                id="dailyForecastPic"
              />
              <section className="dailyForecastData">
                <div className="tempAndWind">
                  <p className="temp">{this.props.forecast.high}&#8457; &nbsp;|&nbsp; {this.props.forecast.low}&#8457;</p>
                  <img 
                    src={this.props.dailyForecastImg.icon} 
                    alt={this.props.dailyForecastImg.alt} 
                    className="weatherIcon"
                  />
                  <p className="wind"><img src={windIcon} alt="wind icon" className="windIcon" />{this.props.forecast.wind}</p>
                </div>
                <p className="dailyDescription">{this.props.forecast.description}. &nbsp;High of {this.props.forecast.high}&#8457;, low of {this.props.forecast.low}&#8457;. &nbsp;Winds {this.props.forecast.wind}.</p>
              </section>
            </div>
          </Modal.Body>
          <Modal.Footer className="movieModalFooter">
            <Button className="Button" variant="secondary" onClick={this.props.handleCloseDailyForecast}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>   
    )
  }
}

export default WeatherDay;
