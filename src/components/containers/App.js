import React from "react";
import Title from "../Title";
import style from "./App.css";
import TodoList from "../TodoList";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
    }
    addTodo(val) {
        const toDo = {
            text:val,
            id:uuid.v4(),
        };
        const data = [...this.state.data, toDo];
        this.setState({data});
    }
     removeTodo = (id) => {
        const reminder = this.state.data.filter(todo => todo.id!==id);
        this.setState({data:reminder});
    }
    render() {
        return (
                <div className={style.ToDoApp}>
                    <Title text="To Do" amount={this.state.data.length}/>
                    <TodoList thingsToDo={this.state.data} remove={this.removeTodo}/>
                </div>
        );
    }
}
export default App;