const CharactersList = (props) => {
  return (
    <div>
      {props.characters.map((character, id) => {
        return (
          <div key={id}>
            <button
              onClick={() => {
                props.characterIdHandler(character.id);
              }}
            >
              {character.name} - {character.server}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
