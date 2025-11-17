import { starlightProjectWinners } from "../data/starlight";
import CategorySection from "./CategorySection";

export default function ProjectWinnersSection() {
  const winners = starlightProjectWinners[2025];
  return (
    <div>
      {winners.map((c) => (
        <CategorySection category={c} />
      ))}
    </div>
  );
}
