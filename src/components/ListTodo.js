import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFloppyDisk,
    faTrashCan,
    faMarker,
    faLockOpen,
    faCheck,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

function ListTodo({ todo, setTodo }) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [showDate, setDate] = useState(new Date().toLocaleString());

    function delTodo(id) {
        let afterDelTodo = [...todo].filter((item) => item.id != id);
        setTodo(afterDelTodo);
    }

    function statusTodo(id) {
        let afterDelTodo = [...todo].filter((item) => {
            if (item.id == id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(afterDelTodo);
    }

    function editTodo(id, name, description) {
        setEdit(id);
        setName(name);
        setValue(description);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map((item) => {
            if (item.id == id) {
                item.description = value;
                item.name = name;
                item.date = showDate;
            }
            return item;
        });
        setTodo(newTodo);
        setEdit(null);
    }

    const handelTime = () => {
        let time = new Date().toLocaleString();
        setDate(time);
    };

    return (
        <div>
            <div className="editable-row titles">
                <div className="enterName">Name</div>
                <div className="showDateTitle">Date</div>
                <div className="enterDescription">Description</div>
                <div className="btnsTodo"></div>
            </div>
            {todo.map((item) => (
                <div key={item.id} className="editable-row">
                    {edit == item.id ? (
                        <div className="enterName">
                            <input
                                className="enterNameEdit"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="enterName">{item.name}</div>
                    )}
                    {edit == item.id ? (
                        <div className="showDateAfter">{item.date}</div>
                    ) : (
                        <div className="showDate">{item.date}</div>
                    )}
                    {edit == item.id ? (
                        <div className="enterDescriptionAfter">
                            <input
                                className="enterNameEdit"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className={!item.status ? "closeIcon" : "enterDescription"}>
                            {item.description}
                        </div>
                    )}

                    {edit == item.id ? (
                        <div className="btnsTodo">
                            <Button
                                variant="success"
                                size="sm"
                                className="btn"
                                onClick={() => {
                                    setEdit(null);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </Button>

                            <Button
                                variant="success"
                                size="sm"
                                className="btn"
                                onClick={() => {
                                    saveTodo(item.id);
                                    handelTime(item.date);
                                }}
                            >
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </Button>
                        </div>
                    ) : (
                        <div className="btnsTodo">
                            <Button
                                variant="warning"
                                size="sm"
                                className="btn"
                                onClick={() => editTodo(item.id, item.name, item.description)}
                            >
                                <FontAwesomeIcon icon={faMarker} />
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="btn"
                                onClick={() => statusTodo(item.id)}
                            >
                                {item.status ? (
                                    <FontAwesomeIcon icon={faCheck} />
                                ) : (
                                    <FontAwesomeIcon icon={faLockOpen} />
                                )}
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                className="btn"
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete...")) {
                                        delTodo(item.id);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ListTodo;
