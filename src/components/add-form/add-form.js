import React, { Component } from "react";
import "./add-form.css";

export default class AddForm extends Component {
    state = {
        label: "",
    }

    setInputValue = (event) => {
        this.setState({ label: event.target.value })
    }

    setNewLabel = (event) => {
        event.preventDefault();

        if (this.state.label === "" || !this.state.label.trim()) {
            return
        }

        this.props.addposts(this.state.label);
        this.setState({ label: "" });

    }

    render() {
        return (
            <div className="item-add-form">
                <form onSubmit={this.setNewLabel}>
                    <input type="text"
                        value={this.state.label}
                        onInput={this.setInputValue}
                        placeholder="Whats need to be done"
                        className="form-control " />
                    <button className="btn btn-outline-secondary">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}