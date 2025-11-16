import { useState } from "react";
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

const random = (n: number) => {
  return Math.floor(Math.random() * n);
};

export default function Submissions({ year }: { year: number }) {
  const [projects, setProjects] = useState(
    shuffleArray(starlightProjectData[year])
  );
  const [highlightIdx, setHighlightIdx] = useState(random(projects.length - 1));

  const handleShuffle = () => {
    setProjects(shuffleArray(starlightProjectData[year]));
  };

  return (
    <>
      <h2 className="year-text">Submissions</h2>
      <button onClick={handleShuffle}>Shuffle</button>
      <ProjectSpreadRight project={projects[highlightIdx]} />
      <section className="submissions-container">
        {projects.map((p) => (
          <ProjectCard project={p} />
        ))}
      </section>
    </>
  );
}
