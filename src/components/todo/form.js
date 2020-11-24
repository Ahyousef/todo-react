import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "./hooks/useForm.js";

function TodoForm(props) {
  const [values, handleInputChange, handleSubmit] = useForm(handleFormSubmit);
  const [item, setItem] = useState({});
  function handleFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(values);
    const emptyItem = {};
    setItem({ item: emptyItem });
  }

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
