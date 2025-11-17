import {
  starlightProjectData,
  type CardType,
  type Category,
} from "../data/starlight";
import ProjectSpreadLeft from "./ProjectSpreadLeft";
import ProjectSpreadRight from "./ProjectSpreadRight";
import styles from "./CategorySection.module.css";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <div className={styles.categorySection}>
      <h2>{category.name}</h2>
      <CategoryMainDisplay category={category} />
    </div>
  );
}

function CategoryMainDisplay({ category }: { category: Category }) {
  return category.projects.map((p, i) => {
    if (i % 2 === 0) {
      return <ProjectSpreadRight project={lookupProject(p)} />;
    } else {
      return <ProjectSpreadLeft project={lookupProject(p)} />;
    }
  });
}

function lookupProject(project_name: string): CardType {
  return (
    starlightProjectData[2025].find((x) => x.name === project_name) ?? {
      name: "Unknown",
      desc: "Unknown",
      thumbnailUrl: "Unknown",
    }
  );
}
