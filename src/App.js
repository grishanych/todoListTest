import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import ListTodo from './components/ListTodo';
import {Container} from 'react-bootstrap'

function App() {


  const LOCAL_STORAGE_KEY = "task-list";
  const [todo, setTodo] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);
    
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
