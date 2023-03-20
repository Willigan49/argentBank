import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Root from "./views/Root/Root";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Profile from "./views/profile/Profile"

import "./style/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: () => {
          const state = store.getState();
          if( !state.auth.accessToken ) {
            return redirect("/login");
          }
          return null;
        }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
