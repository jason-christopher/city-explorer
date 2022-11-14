import 'react' from React;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      starWarsData: []
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let swData = await axios.get('https://swapi.dev.');
    console.log(swData.data.results);
    this.setState({
      starWarsData: swData.data.results
    });
  }

  render() {

    let listItems = this.state.starWarsData.map((char, idx) => {
      return <li key="{idx}">{char.name}</li>
    })

    return (
      <>
        <h1>Hi</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>
        <ul>
          {listItems}
        </ul>
      </>
    );
  }
}
