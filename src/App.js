import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      errorMsg: '',
      isError: false,
      isModalShown: false,
    }
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleSubmit = async (e) => {
    try{
      e.preventDefault();
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({
        cityData: locationData.data[0],
        isError: false,
        isAlertShown: false,
        isModalShown: true,
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        isError: true,
      })
    }
  }
  
// closes the modal when a click triggers this function
handleCloseModal = () => {
  this.setState({
    isModalShown: false,
  })
}

  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Pick a City
            <input name="city" type="text" onChange={this.handleCityInput} placeholder="Search for a City"/>
          </label>
          <button type="submit">Explore!</button>
        </form>
        {this.state.isError ? 
        <Alert variant="danger">
          <Alert.Heading>Error!</Alert.Heading>
          <p>{this.state.errorMsg}</p>
        </Alert> 
        : <p></p>
        }
        <Modal
          show={this.state.isModalShown} 
          onHide={this.handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="modal-900px"
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1 className="modalTitle">{this.state.cityData.display_name}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="picDiv">
              <img 
                className="modalMap"
                src={mapURL}
                alt={this.state.city.name + 'map'}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;
