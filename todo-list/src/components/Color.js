import React, { Component } from "react";

class Color extends Component {
    render() {
        const { color, active, onChangeColor } = this.props;

        const style = {
            background: `${color}`
        };

        return (
            <div
                className={`color${active ? " active" : ""}`}
                style={style}
                onClick={() => onChangeColor(color)}
            ></div>
        );
    }
}

export default Color;
