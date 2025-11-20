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
      <h2 className={styles.categoryHeader}>{category.name}</h2>
      {category.description && (
        <p className={styles.categorySubHeader}>{category.description}</p>
      )}
      <div className={styles.categoryMain}>
        <CategoryMainDisplay category={category} />
      </div>
    </div>
  );
}

function CategoryMainDisplay({ category }: { category: Category }) {
  return category.projects.map((p, i) => {
    if (i % 2 === 0) {
      return (
        <ProjectSpreadRight
          project={lookupProject(p)}
          top_text={place_map[i + 1]}
        />
      );
    } else {
      return (
        <ProjectSpreadLeft
          project={lookupProject(p)}
          top_text={place_map[i + 1]}
        />
      );
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

const place_map: { [key: number]: string } = {
  1: "1st Place",
  2: "2nd Place",
  3: "3rd Place",
};
