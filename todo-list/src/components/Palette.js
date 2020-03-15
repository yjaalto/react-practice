import React, { Component } from "react";
import "./Palette.css";
import Color from "./Color";

class Palette extends Component {
    render() {
        const { color, selected, onChangeColor } = this.props;

        const colorList = color.map(color => (
            <Color
                color={color}
                key={color}
                active={selected === color ? true : false}
                onChangeColor={onChangeColor}
            />
        ));

        return <div className="palette">{colorList}</div>;
    }
}

export default Palette;
