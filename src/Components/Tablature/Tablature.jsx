import React, { Component } from 'react';
import { SearchBox } from '../SearchBox/SearchBox'

import TablatureForm from './TablatureForm/TablatureForm';
import TablatureContainer from './TablatureContainer/TablatureContainer'

import '../../App.css'

export default class Tablature extends Component {
    constructor () {
      super()
      this.state = {
        tablatures: [],
        searchField: '',
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { tablatures, searchField } = this.state;
    const filteredTabs = tablatures.filter(tab =>
    tab.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <>
      <section class="container">
        <div class="left-half">
              <TablatureForm postTablature={this.postTablature} addTablature={this.addTablature}/>

        </div>
        <div class="right-half">
          <SearchBox placeholder="Search Tabs by Name" handleChange={this.handleChange} />
          {tablatures
            ? <TablatureContainer  tablatures={filteredTabs} deleteTablature={this.deleteTablature}/>
          : <h1>Almost There</h1>
          }
        </div>
      </section>
      </>
    )
  }
}
