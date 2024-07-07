import { Link } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <>
      <p className="read-the-docs">50days50projects attempt in react</p>
      <a href="https://github.com/bradtraversy/50projects50days/tree/master?tab=readme-ov-file">
        HTML only - original project link
      </a>
      <br />
      <a href="">React based - Link needs to be added</a>
      <br />
      <br />
      <br />
      <h5>Challenges</h5>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/day1-expanding-card">day1-expanding-card</Link>
        <Link to="/day2-progress-steps">day2-progress-steps</Link>
      </div>
    </>
  );
}

export default App;
