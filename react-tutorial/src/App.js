import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;
  state = {
    information: [],
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };
  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info =>
        id === info.id ? { ...info, ...data } : info
      )
    });
  };
  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색"
        ></input>
        <PhoneInfoList
          data={information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
      </div>
    );
  }
}

export default App;
