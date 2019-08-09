import React from 'react'
import GroceryItem from '../GroceryItem/GroceryItem';


export default function GroceryContainer(props) {
  console.log(props)
  const Groceries = props.groceries.map((Grocery) => {
    return <GroceryItem
       key={Grocery.id}
       deleteGrocery={props.deleteGrocery}
         id={Grocery.id} item={Grocery.item}
          />
  })

  return(
    <React.Fragment>

      <div  className="Grocery-card-list">{Groceries}</div>

    </React.Fragment>
  )
}
