import React from 'react';
import style from './TodoForm.css';
const TodoForm = (props) => {
    return <form onSubmit={(e) =>{e.preventDefault(); props.add(e.target.firstChild.value)}}>
        <input className={style.TodoInput} type="text" name="task" placeholder='type your task...' />
        <button type="submit" className={style.TodoSubmit}>Add task</button>
        </form>
}
export default TodoForm;