import React from 'react'
import { useCheckTodoMutation, useDelTodoMutation } from '../../store/slices/todos/todosAPI'
import './TodoItem.css'
function TodoItem({completed, id, title, filterInfo}) {
  const [delTodo] = useDelTodoMutation()
  const [checkTodo] = useCheckTodoMutation()
  return (
    <h1 className='todo-item'>
        <input type="checkbox" checked={completed} onChange={async()=> await checkTodo({completed, id, title})}/>
        <p style={{textDecoration: completed ? 'line-through': 'none'}}>{title}</p>
        <span onClick={async()=> await delTodo(id)}>X</span>
    </h1>
  )
}

export default TodoItem