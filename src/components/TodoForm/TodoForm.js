import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetTxt, selectTxt, toggleTxt } from '../../store/slices/txt/txtSlice'
import { useAddTodoMutation } from '../../store/slices/todos/todosAPI'
import './TodoForm.css'

function TodoForm({setFilterInfo}) {
    const txt = useSelector(selectTxt)
    const dispatch = useDispatch()
    const [addTodo, {isError}] = useAddTodoMutation()
   const handleSubmit = async(e)=> {
        e.preventDefault()
        if(txt){
          await addTodo(txt)
        }
        dispatch(resetTxt())
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-div'>
            <input value={txt} type="text"  onChange={({target:{value}})=>dispatch(toggleTxt(value))}/>
            <button type='submit'>Add</button>
        </div>
        <div className='btns-div'>
            <button  onClick={()=> setFilterInfo('')} type='button'>See All todos</button>
            <button  onClick={()=> setFilterInfo('true')} type='button'>See Completed</button>
            <button  onClick={()=> setFilterInfo('false')} type='button'>See Unfulfilled</button>
        </div>
    </form>
  )
}

export default TodoForm