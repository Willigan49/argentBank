import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { logout as authLogout } from "./slices/authSlice";
import { logout as userLogout } from "./slices/userSlice";

import Root from "./views/Root/Root";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";

import "./style/style.css";
import { fetchUser } from "./slices/userSlice";

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
        loader: async () => {
          const state = store.getState();
          if (!state.auth.accessToken) {
            return redirect("/login");
          }
          await store.dispatch(fetchUser(state.auth.accessToken));
          return store.getState().user.user;
        },
      },
      {
        path: "/logout",
        loader: () => {
          store.dispatch(authLogout());
          store.dispatch(userLogout());
          return redirect("/");
        },
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
