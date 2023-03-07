import { useState } from "react";
import { login } from "../../api/authentication";

export default function LoginForm() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  /**
   * Submit username and password for loging
   * @param {Event} event 
   */
  async function handleSubmit(event) {
    event.preventDefault();
    login({email: userMail, password: userPassword});
  }

  /**
   * Set new username or password value in state
   * @param {Event} event 
   */
  function handleChange(event) {
    if (event.target.id === "username") {
      setUserMail(event.target.value);
    }
    if (event.target.id === "password") {
      setUserPassword(event.target.value);
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
