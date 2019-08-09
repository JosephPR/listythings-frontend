import React, { Component } from 'react'
import '../../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button'

export default class GroceryItem extends Component {

render() {
  const { id,item, deleteGrocery } = this.props
  return(
    <React.Fragment>
      <ul id="groceries">
        <li>{item}<FontAwesomeIcon icon={faTrashAlt}  className="delete-button" onClick= { () => deleteGrocery(id)} color="primary" variant="outlined" />
        </li>
      </ul>



    </React.Fragment>
  )
  }
}
