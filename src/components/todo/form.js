import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    console.log("handling change");
    console.log(e.target.value);
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("button clicked");
    e.preventDefault();
    e.target.reset();
    console.log(item);
    props.handleSubmit(item);
    const resetitem = {};
    setItem({ item: resetitem });
  };

  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> To Do Item </Form.Label>
          <Form.Control
            name="text"
            type="test"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
          <Form.Label>Assigned To </Form.Label>
          <Form.Control
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
          <Button type="submit" className="mb-2" variant="primary">
            Add Item
          </Button>
        </Form.Group>
      </form>
    </>
  );
}

export default TodoForm;
