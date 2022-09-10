import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan, faMarker, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function ListTodo({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [showDate, setDate] = useState(new Date().toLocaleString());

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


    function editTodo(id, name, description) {
        setEdit(id);
        setName(name);
        setValue(description);

    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.description = value;
                item.name = name;
                item.date = showDate;
            }
            return item
        })
        setTodo(newTodo);
        setEdit(null);

    }

    const handelTime = () => {
        let time = new Date().toLocaleString();
        setDate(time);
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id} className="editable-row">

                        {
                            edit == item.id ?
                                <div className="enterName">
                                    <input value={name} onChange={(e) => setName(e.target.value)} />

                                </div> :
                                <div>{item.name}</div>
                        }

                        <div className="showDate">{item.date}</div>

                        {
                            edit == item.id ?
                                <div className="enterDescription">
                                    <input value={value} onChange={(e) => setValue(e.target.value)} />

                                </div> :
                                <div className={!item.status ? "closeIcon" : "enterDescription"} >{item.description}</div>
                        }

                        {
                            edit == item.id ?
                                <div>
                                    <Button variant="success" size="sm" className="btn" onClick={() => { saveTodo(item.id); handelTime(item.date) }}><FontAwesomeIcon icon={faFloppyDisk} /></Button>
                                </div> :
                                <div className="btnsTodo">
                                    <Button variant="warning" size="sm" className="btn" onClick={() => editTodo(item.id, item.name, item.description)}><FontAwesomeIcon icon={faMarker} /></Button>
                                    <Button variant="secondary" size="sm" className="btn" onClick={() => statusTodo(item.id)}>
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />
                                        }
                                    </Button>
                                    <Button variant="danger" size="sm" className="btn" onClick={() => delTodo(item.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
                                </div>
                        }


                    </div>
                ))
            }
        </div>
    )
};

export default ListTodo;