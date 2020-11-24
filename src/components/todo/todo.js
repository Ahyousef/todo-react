import React, { useEffect, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";

import "./todo.scss";

function ToDo() {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
    console.log(list);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    console.log(item);

    if (item._id) {
      item.complete = !item.complete;
      setList(
        list.map((listItem) => (listItem._id === item._id ? item : listItem))
      );
    }
  };

  useEffect(() => {
    setList([
      {
        _id: 1,
        complete: false,
        text: "test",
        difficulty: 3,
        assignee: "Person A"
      },
      {
        _id: 2,
        complete: false,
        text: "Do the Laundry",
        difficulty: 2,
        assignee: "Person A"
      },
      {
        _id: 3,
        complete: false,
        text: "Walk the Dog",
        difficulty: 4,
        assignee: "Person B"
      },
      {
        _id: 4,
        complete: true,
        text: "Do Homework",
        difficulty: 3,
        assignee: "Person C"
      },
      {
        _id: 5,
        complete: false,
        text: "Take a Nap",
        difficulty: 1,
        assignee: "Person B"
      }
    ]);
  }, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList list={list} handleComplete={toggleComplete} />
        </div>
      </section>
    </>
  );
}

export default ToDo;
