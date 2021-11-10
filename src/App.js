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
      type: "All Pokemons"
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
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

  previousPokemon (pokemons) {
    if (this.state.pokemonIndex <= 1){
        this.setState(() => ({
          pokemonIndex: (pokemons.length )
      }))
    }
    if (this.state.pokemonIndex <= (pokemons.length - 1)) {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex - 1
      }));
    }
  }

  filterPokemonType () {
    return ['All Pokemons', ...new Set(pokemons.map(({ type }) => (type)))];
  }

  filterPokemon (event) {
    this.setState({
      type: event.target.value
    });
  }

  pokemonsByType () {
    return pokemons.filter((pokemon) => {
      if (this.state.type === "All Pokemons") {
        return true;
      }
      return this.state.type === pokemon.type;
    });
  }

  render () {
    return (
      <>
      <Header />
      <main className="content-container">
      <Pokemon pokemons = {this.pokemonsByType()[this.state.pokemonIndex]} />
      <div className="type-btn-container">
        {
          this.filterPokemonType().map((type) => (
            <button className="btn-type" key={type} value={type} onClick={this.filterPokemon}>{type}</button>
          ))
        }
      </div>
      <div className="next-btn-container">
        <button onClick={() => this.nextPokemon(this.pokemonsByType())} className="next-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="right-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        </button>
        <button onClick={() => this.previousPokemon(this.pokemonsByType())} className="previous-btn">
        <svg xmlns="http://www.w3.org/2000/svg"       className="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
       
        </button>
      </div>
      </main>
      <Footer />
      </>
    );
  }
}

export default App;
