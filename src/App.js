import React from 'react'
import './App.css';
import pokemons from './data'
import Pokemon from './Pokemon';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0
    }

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    if(this.state.pokemonIndex < (pokemons.length - 1)) {
      this.setState((prevState, _props ) => ({
        pokemonIndex: prevState.pokemonIndex + 1
      }))
    } else {
      this.setState({
        pokemonIndex: 0
      })
    }
  };

  render() {
    return (
      <>
      <Header />
      <Pokemon pokemons = {pokemons[this.state.pokemonIndex]} />
      <button onClick={this.nextPokemon}>Proximo Pokemon</button>
      <Footer />
      </>
    );
  }
}

export default App;
