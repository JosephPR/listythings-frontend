import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import '../../../App.css'
import Button from '@material-ui/core/Button';

export default class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    const newTodo = this.state
  event.preventDefault()
  this.props.postTodo(newTodo)
  this.setState ({
    task:'',
    description:''
  })

  }


  render(){
    return (
      <>
      <h1 className='form-heading'>Todo it!</h1>
      <form  onSubmit={(event) => this.handleSubmit(event)} className="form">
          <label htmlFor='task'>Task: </label>
                  <Input name="task" id="task" onChange={(event) => this.handleChange(event)} value={this.state.task} />
                <label htmlFor='description'>Description: </label>
                  <Input name="description" id="description" onChange={(event) => this.handleChange(event)} value={this.state.description} />
                <Button type="submit" color="primary" variant="outlined">Submit</Button><br />
      </form>
      </>
    )
  }
}
