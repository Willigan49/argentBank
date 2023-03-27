import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import argentBankLogo from "../../assets/argentBankLogo.png";

export default function Root() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    token ? setIsAuthenticate(true) : setIsAuthenticate(false);
  }, [token]);

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
              <Link className="main-nav-item" to="/logout">
                <FontAwesomeIcon
                  className="user-icon"
                  icon={solid("right-from-bracket")}
                />
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}
