import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: "",
            phone: ""
        };
    }

    static propTypes = {
        contact: PropTypes.object,
        onEdit: PropTypes.func
    };

    handleToggle = () => {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
    };

    handleEdit = () => {
        this.props.onEdit(this.state.name, this.state.phone);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;
        const blank = <div>Not Selected</div>;
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? "OK" : "Edit"}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: "",
        phone: ""
    },
    onRemove: () => {
        console.error("onRemove is not defined");
    },
    onEdit: () => {
        console.error("onEdit is not defined");
    }
};
export default ContactDetails;
