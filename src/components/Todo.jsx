import React from 'react';

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = event => {
    deleteTodo(message);
  };

  return (
    <li id="todo" key={message.id}>
      <p id="message__text">{message.text}</p>
      <button id="todo__delete" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
