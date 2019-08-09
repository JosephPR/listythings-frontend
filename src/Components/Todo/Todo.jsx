import React, { Component } from 'react';

import TodoForm from '../../Components/TodoForm/TodoForm';
import TodoContainer from '../../Components/TodoContainer/TodoContainer'

import '../../App.css'

export default class Todo extends Component {
    constructor () {
      super()
      this.state = {
        todos: ''
      }
    };

    componentDidMount() {
      this.fetchTodos()
    }

    fetchTodos = () => {
      let url = "http://localhost:3000/todos"
      fetch(url)
      .then(response => response.json())
      .then(result => this.setState({todos: result}))
    }

    deleteTodo = (id) => {
    let url = `http://localhost:3000/todos/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchTodos())
  }

    addTodo = (todoObj) => {
    const newItem = {...todoObj, id: Date.now()}
    const newTodos = [...this.state.todos, newItem]
    this.setState({
      todos: newTodos
    })
  }

  postTodo = (newTodo) => {
    let url = "http://localhost:3000/todos"
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchTodos())
  }


  render() {
    const { todos } = this.state;
    return (
      <>
      <TodoForm postTodo={this.postTodo} addTodo={this.addTodo}/>
      {todos
        ? <TodoContainer  todos={todos} deleteTodo={this.deleteTodo}/>
      : <h1>Almost There</h1>
      }
      </>
    )
  }
}