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
              <p className="description">Latitude: {this.props.cityData.lat}</p>
              <p className="description">Longitude: {this.props.cityData.lon}</p>
            </Card.Text>
            <div className="cardButtonDiv">
              <Button 
                className="cardButton" 
                variant="primary"
                onClick={this.props.handleGetWeather}
              >Get Weather</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Cards;
