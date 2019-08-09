import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import '../../App.css'
import Button from '@material-ui/core/Button';

export default class GroceryForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    const newGrocery = this.state
  event.preventDefault()
  this.props.postGrocery(newGrocery)
  this.setState ({
    item: ''
  })

  }


  render(){
    return (
      <>
      <h1 className='form-heading'>Grocery it!</h1>
      <form  onSubmit={(event) => this.handleSubmit(event)} className="form">
          <label htmlFor='item'>Item: </label>
                  <Input name="item" id="item" onChange={(event) => this.handleChange(event)} value={this.state.item} />
                <Button type="submit" color="primary" variant="outlined">Submit</Button><br />
      </form>
      </>
    )
  }
}
