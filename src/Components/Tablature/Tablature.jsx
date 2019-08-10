import React, { Component } from 'react';

import TablatureForm from './TablatureForm/TablatureForm';
import TablatureContainer from './TablatureContainer/TablatureContainer'

import '../../App.css'

export default class Tablature extends Component {
    constructor () {
      super()
      this.state = {
        tablatures: [],
      }
    };

    componentDidMount() {
      this.fetchTablatures()
    }

    fetchTablatures = () => {
      let url = "http://localhost:3000/tablatures"
      fetch(url)
      .then(response => response.json())
      .then(result => this.setState({tablatures: result}))
    }

    deleteTablature = (id) => {
    let url = `http://localhost:3000/tablatures/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchTablatures())
  }

    addTablature = (tablaturesObj) => {
    const newItem = {...tablaturesObj, id: Date.now()}
    const newTablatures = [...this.state.tablatures, newItem]
    this.setState({
      tablatures: newTablatures
    })
  }

  postTablature = (newTablature) => {
    let url = "http://localhost:3000/tablatures"
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newTablature),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchTablatures())
  }


  render() {
    const { tablatures } = this.state;
    return (
      <>
      <div className="tab-page">
        <TablatureForm postTablature={this.postTablature} addTablature={this.addTablature}/>
        {tablatures
          ? <TablatureContainer  tablatures={tablatures} deleteTablature={this.deleteTablature}/>
        : <h1>Almost There</h1>
        }
      </div>

      </>
    )
  }
}
