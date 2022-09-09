import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import ListTodo from './components/ListTodo';

function App() {


  const [todo, setTodo] = useState([
    {
      id: 1,
      name: 'Grygorii',
      description: 'first todo',
      date: new Date().toLocaleString(),
      status: true
    },
    {
      id: 2,
      name: 'Grygorii',
      description: 'second todo',
      date: new Date().toLocaleString(),
      status: true
    },
    {
      id: 3,
      name: 'Grygorii',
      description: 'third todo',
      date: new Date().toLocaleString(),
      status: true
    }
  ]);

  console.log(todo)

  return (
    <div className='App'>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
