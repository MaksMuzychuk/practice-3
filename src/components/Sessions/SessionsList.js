const SessionsList = (props) => {
  return (
    <div>
      {props.sessions.map((session, idx) => {
        if (props.selectedCharacter === session.characterId) {
          return (
            <ul key={idx}>
              <li>
                {session.date} {session.hours}h
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default SessionsList;
