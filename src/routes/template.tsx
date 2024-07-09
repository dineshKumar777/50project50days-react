import { useEffect } from "react";
import styles from "../css/day2.module.css";

export default function Day2ProgressSteps() {
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(styles.day4);
  }, []);

  return (
    <div>
      <a href="/">Back to Home</a>
      <h1>Day 2: Progress Steps</h1>
    </div>
  );
}
