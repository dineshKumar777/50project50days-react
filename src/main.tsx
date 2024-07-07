import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Day1ExpandingCards from "./routes/day1-expanding-cards.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/day1-expanding-card",
    element: <Day1ExpandingCards />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
