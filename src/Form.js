
import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="taskInput"
        placeholder="Enter task ..."
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;