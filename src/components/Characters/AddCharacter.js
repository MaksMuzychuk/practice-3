import React, { useEffect, useState } from 'react';

const AddCharacter = (props) => {
  const [addForm, setAddForm] = useState(false);
  const [inputName, setInputName] = useState('');
  const [selectServer, setSelectServer] = useState('Plamegor');
  const [nameIsValid, setNameIsValid] = useState(false);

  useEffect(() => {
    setNameIsValid(inputName.trim().length > 2);
  }, [inputName]);

  const switchForm = () => {
    setAddForm(addForm === 1 ? 0 : 1);
  };

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const selectServerHandler = (event) => {
    setSelectServer(event.target.value);
  };

  const validateNameHandler = () => {
    setNameIsValid(inputName.trim().length > 2);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const characterData = {
      name: inputName,
      server: selectServer,
      id: Math.random().toString(),
    };
    props.onSaveCharacterName(characterData);
    props.selectCharacter(characterData.id);
    setInputName('');
    setSelectServer('Plamegor');
    switchForm();
  };

  return (
    <div>
      {!addForm ? <button onClick={switchForm}>Add Character</button> : ''}
      {addForm ? (
        <div>
          <form onSubmit={onSubmitHandler}>
            <label>Character Name</label>
            <input
              type="text"
              value={inputName}
              onChange={inputNameHandler}
              onBlur={validateNameHandler}
            />
            <label>Server</label>
            <select value={selectServer} onChange={selectServerHandler}>
              <option value="Outland">Outland</option>
              <option value="Ravencrest">Ravencrest</option>
              <option value="Plamegor">Plamegor</option>
            </select>
            <div>
              <button type="submit" disabled={!nameIsValid}>
                Save
              </button>
              <button onClick={switchForm}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AddCharacter;
