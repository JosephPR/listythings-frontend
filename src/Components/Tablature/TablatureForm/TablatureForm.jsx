import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import '../../../App.css'
import Button from '@material-ui/core/Button';

export default class TablatureForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      url: '',
      description: '',
      composer: '',
      skill: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    const newTablature = this.state
  event.preventDefault()
  this.props.postTablature(newTablature)
  this.setState ({
    name: '',
    url: '',
    description: '',
    composer: '',
    skill: '',
  })

  }


  render(){
    return (
      <>
      <h1 className='form-heading'>Tablature it!</h1>
      <form  onSubmit={(event) => this.handleSubmit(event)} className="tab-form">
                  <Input name="name" placeholder="Title" className="tab-input" onChange={(event) => this.handleChange(event)} value={this.state.name} /><br />

                  <Input name="url" placeholder="Url"  className="tab-input" onChange={(event) => this.handleChange(event)} value={this.state.url} /><br />

                  <Input name="description" placeholder="Description"  className="tab-input" onChange={(event) => this.handleChange(event)} value={this.state.description} /><br />

                  <Input name="composer"  placeholder="Composer" className="tab-input" onChange={(event) => this.handleChange(event)} value={this.state.composer} /><br />

                  <Input name="skill" placeholder="Skill"  className="tab-input" onChange={(event) => this.handleChange(event)} value={this.state.skill} /><br />
                <Button type="submit" color="primary" variant="outlined">Submit</Button><br />
      </form>
      </>
    )
  }
}
