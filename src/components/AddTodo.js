import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
        setTodo(
            [...todo, {
                id: uuidv4(),
                name: 'NewName',
                description: value,
                date: new Date().toLocaleString(),
                status: true
            }]
        )
        setValue('')

        }
    }

    return (
        <div>
            <input placeholder="Enter exercise" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>Save</button>
        </div>
    )
};

export default AddTodo;