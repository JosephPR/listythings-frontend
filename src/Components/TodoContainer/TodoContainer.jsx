import React from 'react'
import TodoItem from '../TodoItem/TodoItem';


export default function TodoContainer(props) {
  console.log(props)
  const todos = props.todos.map((todo) => {
    return <TodoItem
       key={todo.id}
       deleteTodo={props.deleteTodo}
         id={todo.id} task={todo.task}
          description={todo.description}
          />
  })

  return(
    <React.Fragment>
      <div  className="todo-card-list">{todos}</div>

    </React.Fragment>
  )
}
