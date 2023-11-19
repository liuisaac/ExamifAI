import App from './App.jsx'
import { DNE, Forge, HackCamp, Profile } from './pages'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/forge",
    element: <Forge />
  },
  {
    path: "/hackcamp2023",
    element: <HackCamp />
  },
  {
    path: "/*",
    element: <DNE />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

