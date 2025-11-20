import { useEffect, useState } from "react";
import { starlightProjectData, type CardType } from "../data/starlight";
import ProjectCard from "./ProjectCard";
import ProjectSpreadRight from "./ProjectSpreadRight";

const shuffleArray = (array: CardType[]) => {
  const newArray = [...array]; // Create a shallow copy to avoid modifying the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
};

// const random = (n: number) => {
//   return Math.floor(Math.random() * n);
// };

export default function Submissions({ year }: { year: number }) {
  const [projects, setProjects] = useState(
    shuffleArray(starlightProjectData[year])
  );
  const [highlightIdx, setHighlightIdx] = useState(0);

  const handleShuffle = () => {
    setProjects(shuffleArray(starlightProjectData[year]));
  };

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      setHighlightIdx((prevCount) =>
        prevCount === projects.length - 1 ? 0 : prevCount + 1
      ); // Update state on each interval
    }, 15 * 1000);

    return () => clearInterval(intervalId);
  }, [projects.length]);

  return (
    <>
      <h2 className="year-text">All Submissions</h2>
      <button onClick={handleShuffle}>Shuffle</button>
      <ProjectSpreadRight project={projects[highlightIdx]} />
      <br></br>
      <section className="submissions-container">
        {projects.map((p) => (
          <ProjectCard project={p} />
        ))}
      </section>
      [
    </>
  );
}
