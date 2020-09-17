import React, { useState } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import TodoForm from './components/TodoForm/TodoForm';

import "./App.css";


function App() {

  const [todos, setTodos] = useState([
    { text: "Finish plus project.", isCompleted: false },
    { text: "Feed peggy.", isCompleted: false },
    { text: "Sleep.", isCompleted: false }  
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To Do List</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;