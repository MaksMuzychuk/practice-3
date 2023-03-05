import { useState } from 'react';
import AddSession from './AddSession';
import SessionsList from './SessionsList';

const Sessions = (props) => {
  const [sessions, setSessions] = useState([]);

  const sessionsDataHandler = (sessionData) => {
    setSessions([sessionData, ...sessions]);
  };

  return (
    <div>
      <h1>Sessions</h1>
      <AddSession
        selectedCharacter={props.selectedCharacter}
        sessionDataHandler={sessionsDataHandler}
      />
      <SessionsList
        sessions={sessions}
        selectedCharacter={props.selectedCharacter}
      />
    </div>
  );
};

export default Sessions;
