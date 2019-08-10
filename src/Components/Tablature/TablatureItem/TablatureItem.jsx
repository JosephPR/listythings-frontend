import React, { Component } from 'react'
import '../../../App.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

export default class TablatureItem extends Component {

render() {
  const { id, name, description, deleteTablature } = this.props
  return(
    <React.Fragment>
      <ExpansionPanel id="expand-panel">
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}

      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography id="name"> {name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
      {description}

      </Typography>
      <Button className="delete-button" onClick= { () => deleteTablature(id)} color="primary" variant="outlined">
        Delete
      </Button>
    </ExpansionPanelDetails>
  </ExpansionPanel>


    </React.Fragment>
  )
  }
}
