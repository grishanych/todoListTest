import React, { useState } from "react";
import { Row, Col, Button, FormControl  } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [showDate, setDate] = useState(new Date().toLocaleString()); 
    

    const handelTime = () =>{
        let time = new Date().toLocaleString(); 
        setDate(time);
      }


    function saveTodo() {
        if(value && name) {
        setTodo(
            [...todo, {
                id: uuidv4(),
                name: name,
                description: value,
                date: showDate,
                status: true
            }]
        )
        setName('');
        setValue('');
        }
    }

    return (
        <Row > 
            <Col className="input-row">
            <FormControl placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <FormControl placeholder="Enter exercise" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button variant="success" onClick={ ()=> {saveTodo(); handelTime() }}>Save</Button>
            </Col>
            </Row>
            
    )
};

export default AddTodo;