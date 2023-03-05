import { useEffect, useState } from 'react';
import moment from 'moment';

const AddSession = (props) => {
  const [addForm, setAddForm] = useState(false);
  const [inputDate, setInputDate] = useState(moment().format('YYYY-MM-DD'));
  const [inputHours, setInputHours] = useState('1');
  const [inputDateIsValid, setInputDateIsValid] = useState(false);
  const [inputHoursIsValid, setInputHoursIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setInputHoursIsValid(inputHours > 0);
  }, [inputHours]);

  const switchForm = () => {
    setAddForm(addForm === 1 ? 0 : 1);
  };

  const inputDateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const inputHoursChangeHandler = (event) => {
    setInputHours(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const sessionData = {
      date: inputDate,
      hours: inputHours,
      id: Math.random().toString(),
      characterId: props.selectedCharacter,
    };
    props.sessionDataHandler(sessionData);
    console.log(sessionData.date);
    setInputDate('');
    setInputHours('');
    switchForm();
  };

  return (
    <div>
      {!addForm ? (
        <button onClick={switchForm}>Add Session</button>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            onChange={inputDateChangeHandler}
          />
          <label>Time</label>
          <input
            type="number"
            min="1"
            step="1"
            value={inputHours}
            onChange={inputHoursChangeHandler}
          />
          <div>
            <button type="submit" disabled={!inputHoursIsValid}>
              Save
            </button>
            <button>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddSession;
