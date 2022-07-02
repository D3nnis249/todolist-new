import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const changeHandler = event => {
    setInput(event.target.value);
  };

  const submitHandler = event => {
    if (input.length > 0) {
      addTodo(input);
      setInput('');
    } else alert('Please write something in the input field.');
  };
  return (
    <div id="form">
      <label for="form__input"></label>
      <input id="form__input" type="text" value={input} onChange={changeHandler} />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
