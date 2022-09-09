import React, { useState } from "react";

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: 4,
                name: 'NewName',
                description: value,
                date: new Date().toLocaleString(),
                status: true
            }]
        )
    }

    return (
        <div>
            <input placeholder="Enter exercise" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>Save</button>
        </div>
    )
};

export default AddTodo;