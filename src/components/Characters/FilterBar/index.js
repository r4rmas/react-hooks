import React, { useState, useEffect, useMemo } from "react";
import { Container, Search } from "./styles";

const FilterBar = (props) => {
  const [search, setSearch] = useState("");
  const { characters, handleFiltered } = { ...props };

  const filtered = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => handleFiltered(filtered), [search]);

  return (
    <Container>
      <Search
        value={search}
        onChange={handleChange}
        placeholder="Filter character"
      />
    </Container>
  );
};

export default FilterBar;
