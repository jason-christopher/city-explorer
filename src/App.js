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
      this.setState({
        cityData: locationData.data[0],
        isError: false,
      });
    } catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        errorMsg: error.message,
        isError: true
      })
    }
  }

  render() {

    // let listItems = this.state.cityData.map((city, idx) => {
    //   return <li key={idx}>{city.name}</li>
    // })

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Pick a City
            <input name="city" type="text" onChange={this.handleCityInput}/>
          </label>
          <button type="submit">Display City Data</button>
        </form>
        {this.state.isError ? <p>{this.state.errorMsg}</p> : <ul>
          {/* {listItems} */}
        </ul>}
      </>
    );
  }
}

export default App;
