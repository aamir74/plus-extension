import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Todos = () => {
  const [showTodos, setShowTodos] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    if (e.key !== "Enter") return;
    const tasks = [
      {
        id: uuid(),
        name: e.target.value,
        isCompleted: false,
      },
      ...todos,
    ];
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const deleteHandler = (ele, i) => {
    let tasks = [...todos];
    tasks.splice(i, 1);
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const taskHandler = (ele, i) => {
    const updatedTask = { ...ele, isCompleted: true };
    let tasks = [...todos];
    tasks[i] = updatedTask;
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const getTodos = () => {
    let tasks = JSON.parse(localStorage.getItem("todos"));
    if (tasks) setTodos([...tasks]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="todos-container">
        {showTodos && (
          <div className="todo-container ">
            <h3 className="todo-head">Todos</h3>
            <input
              className="todo-input"
              onKeyDown={handleInput}
              placeholder="Add Todos and press Enter"
            />
            <br />
            <br />
            {todos?.map((ele, i) => (
              <div className="list-item">
                {ele.isCompleted ? (
                  <span>
                    <s>{ele.name}</s>
                  </span>
                ) : (
                  <span>{ele.name}</span>
                )}
                {!ele.isCompleted ? (
                  <input
                    type="checkbox"
                    checked={ele.isCompleted}
                    value={ele.task}
                    onChange={() => taskHandler(ele, i)}
                  />
                ) : (
                  <i
                    className="fa fa-trash trash-icon"
                    aria-hidden="true"
                    onClick={() => deleteHandler(ele, i)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
        <button
          className="btn-text btn-primary btn-bg-color small-round"
          onClick={() => setShowTodos(!showTodos)}
        >
          Todos
        </button>
      </div>
    </>
  );
};

export { Todos };
