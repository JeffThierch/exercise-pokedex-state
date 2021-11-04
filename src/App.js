import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      pokemonIndex: 0,
      type: "all"
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  nextPokemon (pokemons) {
    if (this.state.pokemonIndex < (pokemons.length - 1)) {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex + 1
      }));
    } else {
      this.setState({
        pokemonIndex: 0
      });
    }
  }

  filterPokemonType () {
    return ['all', ...new Set(pokemons.map(({ type }) => (type)))];
  }

  filterPokemon (event) {
    this.setState({
      type: event.target.value
    });
  }

  pokemonsByType () {
    return pokemons.filter((pokemon) => {
      if (this.state.type === "all") {
        return true;
      }
      return this.state.type === pokemon.type;
    });
  }

  render () {
    return (
      <>
      <Header />
      <Pokemon pokemons = {this.pokemonsByType()[this.state.pokemonIndex]} />
      {
        this.filterPokemonType().map((type) => (
          <button key={type} value={type} onClick={this.filterPokemon}>{type}</button>
        ))
      }
      <button onClick={() => this.nextPokemon(this.pokemonsByType())}>Proximo Pokemon</button>
      <Footer />
      </>
    );
  }
}

export default App;
