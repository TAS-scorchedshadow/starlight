import "./App.css";
import ProjectSpreadRight from "./components/ProjectSpreadRight";
import Submissions from "./components/Submissions";

function App() {
  return (
    <>
      <h1 className="hero-text">Starlight</h1>
      <div className="subcontainer">
        <div className="card">HI</div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <h2 className="year-text">2025</h2>
      <h2 className="year-text">Best Hobby Project</h2>
      {/* <ProjectSpreadRight  /> */}
      <Submissions year={2025} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
