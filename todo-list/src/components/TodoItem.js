import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        console.log(id);

        const style = {
            color: `${color}`
        };

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div
                    className="remove"
                    onClick={e => {
                        e.stopPropagation();
                        onRemove(id);
                    }}
                >
                    &times;
                </div>
                <div
                    className={`todo-text ${checked ? " checked" : ""}`}
                    style={style}
                >
                    <div>{text}</div>
                </div>
                {checked && <div className="check-mark">&#x2713;</div>}
            </div>
        );
    }
}
const createWarning = funcName => {
    return console.warn(funcName + " is not defined");
};

TodoItem.defaultProps = {
    onToggle: () => createWarning("onToggle"),
    onRemove: () => createWarning("onRemove")
};
export default TodoItem;
