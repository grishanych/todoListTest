import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import ListTodo from './components/ListTodo';

function App() {

  const LOCAL_STORAGE_KEY = "task-list";
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  return (
    <div className='containerMain'>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
