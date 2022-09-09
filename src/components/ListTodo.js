import React, { useState } from "react";

function ListTodo({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

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


    function editTodo(id, description) {
        setEdit(id);
        setValue(description)
    }

    function saveTodo(id){
        let newTodo = [...todo].map(item =>{
            if (item.id == id) {
                item.description = value
            }
            return item
    })
        setTodo(newTodo);
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map(item => (


                    <div key={item.id}>
                        <div>Ваше ім'я {item.name}</div>
                        <div>{item.date}</div>
                        {
                            edit == item.id ?
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>

                                </div> :
                                <div>{item.description}</div>
                        }

                        {
                            edit == item.id ?
                                <div>
                                    <button onClick={()=>saveTodo(item.id)}>Save</button>
                                </div> :
                                <div>
                                    <button onClick={() => delTodo(item.id)}>Delete</button>
                                    <button onClick={() => editTodo(item.id, item.description)}>Edit</button>
                                    <button onClick={() => statusTodo(item.id)}>Close/Open</button>
                                </div>
                        }


                    </div>
                ))
            }
        </div>
    )
};

export default ListTodo;