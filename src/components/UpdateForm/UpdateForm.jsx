import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function UpdateForm({ setDisplayModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length < 1 || lastName < 1) {
      setError("No information provided");
    } else {
      await dispatch(
        updateUser({
          token: token,
          update: { firstName: firstName, lastName: lastName },
        })
      );
      setDisplayModal(false);
      navigate("/profile");
    }
  }

  function handleChange(event) {
    if (event.target.id === "firstname") {
      setFirstName(event.target.value);
    }
    if (event.target.id === "lastname") {
      setLastName(event.target.value);
    }
  }

  return (
    <div className="update-content">
      <form onSubmit={handleSubmit}>
        {error ? <p className="error">{error}</p> : null}
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">lastname</label>
          <input type="text" id="lastname" onChange={handleChange} />
        </div>
        <button className="sign-in-button">Update</button>
      </form>
    </div>
  );
}
