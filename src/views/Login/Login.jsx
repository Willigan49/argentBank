import { useEffect, useState } from "react";
import { fetchBearer } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  /**
   * Submit username and password for loging
   * @param {Event} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    await dispatch(fetchBearer({ email: userMail, password: userPassword }));
    navigate("/profile");
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
    <div className="main bg-dark h-full">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error ? <p className="error">{errorMessage}</p> : null}
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
      </section>
    </div>
  );
}
