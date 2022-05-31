import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggImportant }) => {

  const elements = todos.map(({id, ...others}) => {
    

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...others }
          onDelete={() => onDelete(id)}
           onToggleDone ={ () => {
            onToggImportant(id)
        }}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;