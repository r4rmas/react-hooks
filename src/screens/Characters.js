import React, { useEffect, useState, useContext, useMemo } from "react";
import FilterBar from "../components/Characters/FilterBar";
import Character from "../components/Characters/Character";
import Context from "../context";
import { toggleFavorite } from "../context/reducer/actions";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [{ favorites }, dispatch] = useContext(Context);

  const handleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const isFavorite = (item) => {
    return favorites.includes(item);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      <FilterBar characters={characters} handleFiltered={setFiltered} />
      {filtered.length === 0
        ? characters.map((character) => (
            <Character
              key={character.id}
              data={character}
              onFavorite={{ handleFavorite, isFavorite }}
            />
          ))
        : filtered.map((character) => (
            <Character
              key={character.id}
              data={character}
              onFavorite={{ handleFavorite, isFavorite }}
            />
          ))}
    </>
  );
};

export default Characters;
