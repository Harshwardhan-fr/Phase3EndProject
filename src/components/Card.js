import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [pokemonStat, setPokemonStat] = useState([]);
  useEffect(
    () => async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemonDetails(data);
      setPokemonStat(data.stats);
      // console.log(data);
    },
    [name]
  );
  const findMore = () => {
    console.log(pokemonStat);
  };
  return (
    <div
      className="card d-flex justify-content-center align-items-center "
      style={{ width: "18 rem" }}
    >
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        height={"150px"}
        alt="Pokemon name"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>HP</td>
              <td>ATT</td>
              <td>DEF</td>
              <td>SPD</td>
              <td>Height</td>
              <td>Weight</td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active ">
              <td>{pokemonDetails.id}</td>
              <td>{pokemonStat[0]?.base_stat}</td>
              <td>{pokemonStat[1]?.base_stat}</td>
              <td>{pokemonStat[2]?.base_stat}</td>
              <td>{pokemonStat[5]?.base_stat}</td>
              <td>{pokemonDetails.height}</td>
              <td>{pokemonDetails.weight}</td>
            </tr>
          </tbody>
        </table>
        <a
          href={`https://www.pokemon.com/us/pokedex/${name}`}
          className="btn btn-primary"
        >
          Find more
        </a>
      </div>
    </div>
  );
}

export default Card;
