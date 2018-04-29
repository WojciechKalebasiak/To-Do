import React from 'react';
import style from './TodoList.css'
const TodoList = props => {
    let list = props.thingsToDo.map(value =>
    <li key={value.id} onClick={()=>props.remove(value.id)}>{value.text}</li>);
return <ul className={style.ToDoList}>{list}</ul>
}
export default TodoList;