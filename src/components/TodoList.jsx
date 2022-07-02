import React from 'react';
import Todo from './Todo';

const TodoList = ({ messageList, deleteTodo }) => {
  return (
    <ul id="todo__list">
      {messageList.map(message => (
        <Todo key={message.id} message={message} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
