import AddCharacter from './AddCharacter';
import React, { useState, useEffect } from 'react';
import CharactersList from './CharactersList';
import { API } from 'aws-amplify';
import { listCharacters } from '../../graphql/queries';

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  const charactersDataHandler = (character) => {
    setCharacters([character, ...characters]);
  };

  const onSaveIdData = (characterId) => {
    props.selectCharacter(characterId);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const apiData = await API.graphql({ query: listCharacters });
    const charactersFromAPI = apiData.data.listCharacters.items;
    setCharacters(charactersFromAPI);
  }

  return (
    <div>
      <h1>Characters</h1>
      <AddCharacter
        onSaveCharacterName={charactersDataHandler}
        selectCharacter={onSaveIdData}
        fetchCharacters={fetchCharacters}
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
