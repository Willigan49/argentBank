import { Outlet, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import argentBankLogo from "../../assets/argentBankLogo.png";
import { logout as authLogout } from "../../slices/authSlice";
import { logout as userLogout } from "../../slices/userSlice";

export default function Root() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token ? setIsAuthenticate(true) : setIsAuthenticate(false);
  }, [token]);

  async function logout() {
    await dispatch(authLogout());
    await dispatch(userLogout());
    navigate("/");
  }

  return (
    <div className="wrapper">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-link">
          {!isAuthenticate ? (
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon
                className="user-icon"
                icon={solid("user-circle")}
              />
              Sign In
            </Link>
          ) : (
            <div className="main-nav">
              <Link className="main-nav-item" to="/profile">
                <FontAwesomeIcon
                  className="user-icon"
                  icon={solid("user-circle")}
                />
                {user.firstName}
              </Link>
              <button className="logout-button" onClick={() => logout()}>
                <FontAwesomeIcon
                  className="user-icon"
                  icon={solid("right-from-bracket")}
                />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}
