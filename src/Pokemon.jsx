import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render () {
    const pokemons = this.props.pokemons;
    const { name, type, averageWeight, image } = pokemons;
    return (
      <div className = "pokemon-container">
          <div className = "pokemon-card">
            <div className = "pokemon-info">
                <p>{name}</p>
                <p className = "pokemon-type">{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
              </div>
              <img src={image} alt="from pokemon"></img>
          </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.object
}

export default Pokemon;
