import React, { Component } from 'react'
import '../../../App.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

export default class TodoItem extends Component {

render() {
  const { id, task, description, deleteTodo } = this.props
  return(
    <React.Fragment>
      <ExpansionPanel id="expand-panel">
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}

      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography id="name"> {task}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
      {description}

      </Typography>
      <Button className="delete-button" onClick= { () => deleteTodo(id)} color="primary" variant="outlined">
        Delete
      </Button>
    </ExpansionPanelDetails>
  </ExpansionPanel>


    </React.Fragment>
  )
  }
}
