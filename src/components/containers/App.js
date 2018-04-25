import React from "react";
import Title from "../Title";
import style from "./App.css";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
    removeTodo(id) {
        const reminder = this.state.data.filter(todo => todo.id!==id);
        this.setState({data:reminder});
    }
    render() {
        return (
                <div className={style.ToDoApp}>
                    here will be components
                    <Title amount={this.state.data.length}/>
                </div>
        );
    }
}
export default App;