import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './components/TodoHeader.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import TodoFooter from './components/TodoFooter.jsx';
import './App.css';

const App = () => {
  const [messageList, setMessageList] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(messageList));
    console.log(typeof messageList);
  }, [messageList]);

  const addTodo = message => {
    setMessageList([...messageList, { id: uuidv4(), text: message }]);
  };

  const deleteTodo = message => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1),
    ]);
  };

  return (
    <div id="app">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br />
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <TodoFooter />
    </div>
  );
};

export default App;
