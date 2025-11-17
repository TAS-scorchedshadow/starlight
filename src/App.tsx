import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./App.css";
// import ProjectSpreadRight from "./components/ProjectSpreadRight";
import Submissions from "./components/Submissions";
import ProjectWinnersSection from "./components/ProjectWinnersSection";
gsap.registerPlugin(ScrollTrigger);

function App() {
  // useGSAP(() => {
  //   gsap.to(".year-text", {
  //     scrollTrigger: ".year-text", // start the animation when ".box" enters the viewport (once)
  //     x: 500,
  //   });
  // });
  return (
    <>
      <h1 className="hero-text">Starlight</h1>
      <div className="subcontainer">
        <div className="card">HI</div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <h2 className="year-text">2025</h2>
      <ProjectWinnersSection />
      {/* <ProjectSpreadRight  /> */}
      <Submissions year={2025} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
