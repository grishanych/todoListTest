import React from "react";

function ListTodo({ todo, setTodo }) {

    function delTodo(id) {
        let afterDelTodo = [...todo].filter(item => item.id != id);
        setTodo(afterDelTodo);
    }

    function statusTodo(id) {
        let afterDelTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(afterDelTodo)
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        <div>Ваше ім'я {item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.date}</div>
                        <button onClick={() => delTodo(item.id)}>Delete</button>
                        <button onClick={() => statusTodo(item.id)}>Close/Open</button>
                    </div>
                ))
            }
        </div>
    )
};

export default ListTodo;