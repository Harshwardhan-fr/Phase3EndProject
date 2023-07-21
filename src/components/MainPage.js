import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card";

export default function MainPage() {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [arr, setArr] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currPages, setCurrPages] = useState(0);
  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(true);

  useEffect(
    () => async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=100`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results);
      console.log(pokemonList);
    },
    []
  );
  const SearchPokemons = () => {
    setFilteredPokemonList(pokemonList.filter());
  };
  const filteredPokemon = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search);
  });
 const nextPage = () => {
    setCurrPages(currPages + 1);
  };
  const prevPage = () => {
    setCurrPages(currPages - 1);
  };
  useEffect(() => {
    if (currPages === 1) {
      setPrevActive(true);
    } else {
      setPrevActive(false);
    }
    if (currPages === totalPages) {
      setNextActive(true);
    } else {
      setNextActive(false);
    }
  }, [currPages, totalPages]);
  const SetPagination = () => {
    if (filteredPokemonList === null) {
      console.log("empty");
    } else {
      setTotalPages(Math.ceil(filteredPokemon.length / 10));
      setCurrPages(1);
    }
  };
 
  const onSubmit = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    // setSearch(e.target.value);
    setVisible(true);
    SetPagination();
    console.log(search);
    console.log(filteredPokemon);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Pokemon"
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          l̥
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Search
          </button>
        </div>

        {/* <div className="container text-center  bg-blue"><Card name="bulbasaur"/></div> */}
      </form>
      <div className="container text-center d-flex flex-wrap ">
        {filteredPokemon
          .slice((currPages - 1) * 10, (currPages - 1) * 10 + 10)
          .map((pokemon) => (
            <Card name={pokemon.name} />
          ))}
      </div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <button
              name="Prevbutton"
              disabled={prevActive}
              className="btn btn-primary"
              href="#"
              onClick={prevPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <button type="submit" className="btn btn-disabled">
              {currPages}
            </button>
          </li>
          <li className="page-item " aria-current="page">
            <button type="submit" className="btn btn-disabled">
              of
            </button>
          </li>
          <li className="page-item active" aria-current="page">
            <button type="submit" className="btn btn-disabled">
              {totalPages}
            </button>
          </li>
          <li className="page-item">
            <button
              name="Prevbutton"
              disabled={nextActive}
              className="btn btn-primary"
              href="#"
              onClick={nextPage}
            >
              next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
