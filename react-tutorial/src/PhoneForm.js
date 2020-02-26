import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.onCreate(this.state);

    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button title="저장">저장</button>
      </div>
    );
  }
}

export default PhoneForm;
