import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
          <Modal.Header closeButton>
            <Modal.Title className="dailyModalTitle">{this.props.cityData.display_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img
            className="d-block w-100"
            src={this.props.dailyForecastImg.URL}
            alt={this.props.dailyForecastImg.alt}
          />
            <h3>Date: {this.props.forecast.date}</h3>
            <p>{this.props.forecast.description}</p>
            <p>High: {this.props.forecast.high}</p>
            <p>Low: {this.props.forecast.low}</p>
            <p>Wind: {this.props.forecast.wind}</p>
          </Modal.Body>
          <Modal.Footer>
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
