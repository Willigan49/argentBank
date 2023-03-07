import { useEffect, useState } from "react";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName, password)
  }

  function handleChange(event) {
    if (event.target.id === "username") {
      setUserName(event.target.value);
    }
    if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={handleChange} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
