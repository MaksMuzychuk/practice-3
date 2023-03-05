import AddCharacter from './AddCharacter';
import React, { useState } from 'react';
import CharactersList from './CharactersList';

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  const charactersDataHandler = (character) => {
    setCharacters([character, ...characters]);
  };

  const onSaveIdData = (characterId) => {
    props.selectCharacter(characterId);
  };

  return (
    <div>
      <h1>Characters</h1>
      <AddCharacter
        onSaveCharacterName={charactersDataHandler}
        selectCharacter={onSaveIdData}
      />
      <CharactersList
        characters={characters}
        key={characters.id}
        characterIdHandler={onSaveIdData}
      />
    </div>
  );
};

export default Characters;
