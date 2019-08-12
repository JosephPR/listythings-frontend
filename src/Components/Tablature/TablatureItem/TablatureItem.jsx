import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../../App.css'

export default class TablatureItem extends Component {

render() {
  const { id, name, url, description, composer, skill, deleteTablature } = this.props
  return(
    <React.Fragment>

      <Card className="card">
     <CardContent className="card-content">
       <Typography>
         {name}
       </Typography>
       <Typography>
    <a href={url}>{name} Tablature</a>
       </Typography>
       <Typography color="textSecondary">
         {description}
       </Typography>
       <Typography>
        {composer}
       </Typography>
       <Typography>
        <h5>Skill_Level: {skill}</h5>
       </Typography>
       <Button size="small" className="tab-delete-button" onClick= { () => deleteTablature(id)} color="primary" variant="outlined">
         Delete
       </Button>
     </CardContent>
   </Card>


    </React.Fragment>
  )
  }
}
