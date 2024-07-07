import { useState, useEffect } from "react";
import "../css/day2.css";

export default function Day2ProgressSteps() {
  const [currentActive, setCurrentActive] = useState(1);
  const [progressWidth, setProgressWidth] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    updateProgress();
  }, [currentActive]);

  const next = () => {
    setCurrentActive((prev) => (prev < totalSteps ? prev + 1 : totalSteps));
  };

  const prev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const updateProgress = () => {
    setProgressWidth(((currentActive - 1) / (totalSteps - 1)) * 100);
  };

  return (
    <div>
      <a href="/">Back to Home</a>
      <h1>Day 2: Progress Steps</h1>
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            id="progress"
            style={{ width: `${progressWidth}%` }}
          ></div>
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`circle${step <= currentActive ? " active" : ""}`}
            >
              {step}
            </div>
          ))}
        </div>
        <div>
          <button
            className="btn"
            id="prev"
            onClick={prev}
            type="button"
            disabled={currentActive === 1}
          >
            Prev
          </button>
          <button
            className="btn"
            id="next"
            onClick={next}
            type="button"
            disabled={currentActive === totalSteps}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
