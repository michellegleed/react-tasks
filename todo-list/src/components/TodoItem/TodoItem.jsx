import React from 'react';

import './TodoItem.css';

function TodoItem(props) {

    // unpacking the props
    const { todo, index, toggleTodo, removeTodo } = props;
    
    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        { todo.text }
        <div>
            <button onClick={ () => toggleTodo(index) }>{todo.isCompleted ? "Undo" : "Complete"}</button>
            <button onClick={ () => removeTodo(index) }>X</button>
        </div>
    </div>
    )
}

export default TodoItem;