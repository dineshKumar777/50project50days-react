import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Day1ExpandingCards from "./routes/day1-expanding-cards.tsx";
import Day2ProgressSteps from "./routes/day2-progress-steps.tsx";
import Day3RotatingNavAnimation from "./routes/day3-rotating-nav-animation.tsx";
// import "./index.css";
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
  {
    path: "/day2-progress-steps",
    element: <Day2ProgressSteps />,
  },
  {
    path: "/day3-rotating-nav-animation",
    element: <Day3RotatingNavAnimation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
