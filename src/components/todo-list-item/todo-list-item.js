import React, { Component } from 'react';

import './todo-list-item.css';



export default class TodoListItem extends Component {
  importantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  }

  render() {
    const { label, done, important, onToggleDone } = this.props

    let classNames = "todo-list-item"

    if (done) {
      classNames += " done"
    }

    if (important) {
      classNames += " important"
    }

    return (
      <span className={classNames} >
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>

        <div className='icon'>
          <button type="button"
            className="btn btn-outline-success btn-sm" onClick={onToggleDone}>
            <i className="fa fa-exclamation" />
          </button>

          <button type="button"
            onClick={this.props.onDelete}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-alt" />
          </button>
        </div>
      </span>
    );
  }
};