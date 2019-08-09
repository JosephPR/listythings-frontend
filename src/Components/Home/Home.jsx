import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Home extends Component {
  state= {
    date:new Date()
  }

  onChange= date => this.setState({ date })



  render(){
    return (
      <>
      <div className='home-heading'>
      <h1>Listy</h1>

        The perfect way to keep
         track of all the lists that you make

        <Calendar
        className="calendar"
        onChange={this.onChange}
        value={this.state.date}
      />
    </div>
    </>
    )
  }

}
