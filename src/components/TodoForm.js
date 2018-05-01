import React from 'react';
import style from './TodoForm.css';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleAddTask = () => {
        const input = document.getElementById('addTask');
        if(!input.value.length) {
            input.placeholder='Set your task';
        }
        else {
            this.props.add(input.value);
            input.value="";
        }
    }
    render() {
        return (
            <form onSubmit={(e)=>e.preventDefault()}>
                <input className={style.TodoInput} type="text" name="task" id="addTask" placeholder='type your task...'/>
                <button type="submit" className={style.TodoSubmit} onClick={this.handleAddTask}>Add task</button>
            </form>);
    }
}
export default TodoForm;