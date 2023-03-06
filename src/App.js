import React, { useState } from 'react';
import Characters from './components/Characters/Characters';
import Sessions from './components/Sessions/Sessions';
import { API } from 'aws-amplify';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectCharacter = (characterId) => {
    setSelectedCharacter(characterId);
  };

  return (
    <React.Fragment>
      <Characters selectCharacter={selectCharacter} />
      {selectedCharacter > 0 ? (
        <Sessions selectedCharacter={selectedCharacter} />
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default App;
