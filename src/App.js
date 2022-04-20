import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer';
class App extends Component {


  render() {
    return (
      <>
        <AddTodo/>
        <TodoList/>
        <Footer/>
      </>
    );
  }
}

export default App;
