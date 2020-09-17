import React, { useState } from 'react';

import './TodoForm.css';

function TodoForm(props) {

    // unpacking the props
    const { addTodo } = props;

    // set initial value to ""
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            type="text" 
            placeholder="Add To Do..."
            onChange={(event) => setValue(event.target.value)} 
            />
        </form>
    );
}

export default TodoForm;