import React, { Component } from 'react';

import GroceryForm from './GroceryForm/GroceryForm';
import GroceryContainer from './GroceryContainer/GroceryContainer'

import '../../App.css'

export default class Grocery extends Component {
    constructor () {
      super()
      this.state = {
        groceries: [],
      }
    };

    componentDidMount() {
      this.fetchGroceries()
    }

    fetchGroceries = () => {
      let url = "https://listythingsbackend.herokuapp.com/groceries"
      fetch(url)
      .then(response => response.json())
      .then(result => this.setState({groceries: result}))
    }

    deleteGrocery = (id) => {
    let url = `https://listythingsbackend.herokuapp.com/groceries/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchGroceries())
  }

    addGrocery = (groceriesObj) => {
    const newItem = {...groceriesObj, id: Date.now()}
    const newGroceries = [...this.state.groceries, newItem]
    this.setState({
      groceries: newGroceries
    })
  }

  postGrocery = (newGrocery) => {
    let url = "https://listythingsbackend.herokuapp.com/groceries"
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newGrocery),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchGroceries())
  }


  render() {
    const { groceries } = this.state;
    return (
      <>
      <GroceryForm postGrocery={this.postGrocery} addGrocery={this.addGrocery}/>
      {groceries
        ? <GroceryContainer  groceries={groceries} deleteGrocery={this.deleteGrocery}/>
      : <h1>Almost There</h1>
      }
      </>
    )
  }
}
