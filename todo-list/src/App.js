import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";

class App extends Component {
    id = 3;
    colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

    state = {
        input: "",
        todos: [
            {
                id: 0,
                text: " 리액트 소개",
                checked: false,
                color: this.colors[0]
            },
            {
                id: 1,
                text: " flex",
                checked: true,
                color: this.colors[0]
            },
            {
                id: 2,
                text: " Javascript",
                checked: false,
                color: this.colors[0]
            }
        ],
        color: this.colors[0]
    };

    componentWillMount() {
        const todos = localStorage.todos;

        if (todos) {
            this.setState({
                todos: JSON.parse(todos)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevState.todos) !== JSON.stringify(this.state.todos)
        ) {
            localStorage.todos = JSON.stringify(this.state.todos);
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleCreate = () => {
        const { input, todos, color } = this.state;

        if (input === "") return;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: color
            })
        });
    };

    handleKeyPress = e => {
        if (e.key === "Enter") {
            this.handleCreate();
        }
    };

    handleToggle = id => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    };

    handleRemove = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };

    handleChangeColor = color => {
        console.log(color);
        this.setState({
            color: color
        });
    };

    render() {
        const { input, todos, color } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleChangeColor
        } = this;

        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        onToggle={handleToggle}
                        color={color}
                    />
                }
                palette={
                    <Palette
                        color={this.colors}
                        selected={color}
                        onChangeColor={handleChangeColor}
                    />
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                ></TodoItemList>
            </TodoListTemplate>
        );
    }
}

export default App;
