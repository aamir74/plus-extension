import React, { useState } from "react";

const Todos = () => {
  const [showTodos, setShowTodos] = useState(false);

  return (
    <>
      <div className="todos-container">
        {showTodos && (
          <div className="todo-container ">
            <h3 className="todo-head">Today's tasks</h3>
            <input
              className="todo-input"
              // onKeyDown={inputHandler}
              placeholder="Add Todos and press Enter"
            />
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
