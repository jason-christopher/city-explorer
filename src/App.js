import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      errorMsg: '',
      isError: false,
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
      console.log(locationData);
      this.setState({
        cityData: locationData.data[0],
        isError: false,
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        isError: true
      })
    }
  }

  render() {
    let display='';
    if(this.state.isError) {
      display = <p>{this.state.errorMsg}</p>
    } else {
      display = <ul>
        <li>City: {this.state.cityData.display_name}</li>
        <li>Latitude: {this.state.cityData.lat}</li>
        <li>Longitude: {this.state.cityData.lon}</li>
      </ul>
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Pick a City
            <input name="city" type="text" onChange={this.handleCityInput} placeholder="Search for a City"/>
          </label>
          <button type="submit">Explore!</button>
        </form>
        {display}
      </>
    )
  }
}

export default App;
