import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';
const TodoList = props => {
    let list = props.thingsToDo.map(value =>
    <Todo key={value.id} id={value.id} remove = {props.remove} text={value.text}/>);
return <ul className={style.ToDoList}>{list}</ul>
}
export default TodoList;    