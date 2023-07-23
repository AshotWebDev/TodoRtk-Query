import React, { useMemo } from 'react'
import { useGetTodosQuery } from '../../store/slices/todos/todosAPI'
import TodoItem from '../TodoItem/TodoItem'
import  './TodoItems.css'

function TodoItems({filterInfo}) {
    const {data = [],  isLoading} = useGetTodosQuery(filterInfo)
    
    const todos = useMemo(()=>{
      return [...data].reverse()
    },[data])
  return (
    <div className='todo-items'>
        {
            isLoading ? <h1>Loading...</h1>  : 
              todos.map(todo=>(
               <TodoItem key={todo.id} title={todo.title} completed={todo.completed}  id={todo.id} filterInfo={filterInfo}/>
            ))
        }
    </div>
  )
}

export default TodoItems