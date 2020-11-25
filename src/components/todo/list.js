import React from "react";
// import { ListGroup } from "react-bootstrap";

function TodoList(props) {
  return (
    <>
      <ul>
        <div>
          {props.list.map((item) => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <div onClick={() => props.handleComplete(item._id)}>
                <span>Task : {item.text}</span>
                <span> Assignee :{item.assignee}</span>
                <span>Difficulty :{item.difficulty}</span>
              </div>
              <p onClick={() => props.handleDelete(item._id)}>x</p>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}

export default TodoList;
