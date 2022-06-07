import { useEffect, useState } from "react";

const UserDetails = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleUserDetails = () => {
    // localStorage.setItem("username", input);
    setUsername(input);
  };
  return (
    <div className="user-details">
      {username === null ? (
        <>
          {" "}
          <h3>Enter your Name</h3>
          <input
            className="user-input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            class="btn-text btn-primary btn-bg-color"
            onClick={handleUserDetails}
          >
            Get Started
          </button>
        </>
      ) : (
        <>
          <h5>Welcome {username}</h5>
          <br />
          <p>Main goal for today</p>
          <input className="user-input bg-color" type="text" />
        </>
      )}
    </div>
  );
};
export { UserDetails };
