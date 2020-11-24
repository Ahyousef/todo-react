import React from "react";
// import { ListGroup } from "react-bootstrap";

function TodoList(props) {
  return (
    <ul>
      <div>
        {props.list.map((item) => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </div>
    </ul>
  );
}

export default TodoList;
