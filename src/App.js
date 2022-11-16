import React from 'react';
import axios from 'axios';
import Cards from './components/Cards.js';
import Movies from './components/Movies.js';
import Forecast from './components/Forecast.js';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      movies: [],
      forecast: [],
      errorMsg: '',
      isError: false,
      isCardShown: false,
      isCarouselShown: false,
    }
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?queriedLat=${locationData.data[0].lat}&queriedLon=${locationData.data[0].lat}`);
      let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movie?queriedCity=${this.state.city}`);
      console.log(movieData);
      this.setState({
        cityData: locationData.data[0],
        forecast: weatherData.data,
        movies: movieData.data,
        isError: false,
        isCardShown: true,
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        isError: true,
        isCardShown: false,
      })
    }
  }

  handleGetWeather = () => {
    this.setState({
      isCarouselShown: true
    })
  }

  handleCloseCarousel = () => {
    this.setState({
      isCarouselShown: false
    })
  }

  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`;

    return (
      <>
        <header>
          <h1>City Explorer</h1>
        </header>
        <main>
          <div id="heroDiv">
            <img id="hero" src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="city scape" />
            <form onSubmit={this.handleSubmit}>
              <label>Type a city name
                <input name="city" type="text" onChange={this.handleCityInput} placeholder="Search for a City" />
              </label>
              <button id="formButton" type="submit">Explore!</button>
            </form>
            {this.state.isError ? <Alert className="alert" variant="danger"><Alert.Heading>Error!</Alert.Heading><p>{this.state.errorMsg}</p></Alert> : <p className="alert"></p>}
            <article className="cardsArticle">
              {this.state.isCardShown ? <Cards cityData={this.state.cityData} forecast={this.state.forecast} mapURL={mapURL} handleGetWeather={this.handleGetWeather}/> : <p></p>}
            </article>
          </div>
          <Forecast
            handleCloseCarousel={this.handleCloseCarousel}
            forecast={this.state.forecast}
            cityData={this.state.cityData}
            isCarouselShown={this.state.isCarouselShown}
          />
          <Movies
            movies={this.state.movies}
            cityData={this.state.cityData}
          />
        </main>
        <footer>
          <h5>&copy; Jason Christopher, 2022</h5>
        </footer>
      </>
    )
  }
}

export default App;
