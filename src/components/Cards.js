import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Cards extends React.Component {

  render() {

    return (
      <>
        <Card className="cardCard">
          <Card.Img 
            className="cardMap"
            variant="top" 
            src={this.props.mapURL} 
            alt={this.props.cityData.name + 'map'}/>
          <Card.Body>
            <Card.Title className="cardTitle">{this.props.cityData.display_name}</Card.Title>
            <Card.Text>
              <p className="cardDescription">Latitude: {this.props.cityData.lat} | Longitude: {this.props.cityData.lon}</p>
            </Card.Text>
            <div className="cardButtonDiv">
              <Button 
                  className="Button" 
                  variant="primary"
                  onClick={this.props.handleGetDailyForecast}
                >Today's Weather</Button>
              <Button 
                className="Button" 
                variant="primary"
                onClick={this.props.handleGetWeather}
              >5-Day Forecast</Button>
              <Button 
                className="Button" 
                variant="primary"
                onClick={this.props.handleGetMovies}
              >Find Movies</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Cards;
