import React from "react";

const Character = (props) => {
  const character = props.data;
  const {handleFavorite, isFavorite} = props.onFavorite;

  return (
    <div>
      <h2>{character.name}</h2>
      <button onClick={() => handleFavorite(character.id)} >{ isFavorite(character.id) ? "❤️" : "🤍" }</button>
    </div>
  );
};

export default Character;
