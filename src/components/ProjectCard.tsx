import type { CardType } from "../data/starlight";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: CardType }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imgContainer}>
        <img className={styles.mainImage} src={project.thumbnailUrl}></img>
      </div>
      <div className={styles.projectCardBody}>
        <h1 className={styles.projectCardTitle}>{project.name}</h1>
        <h2 className={styles.projectCardSubtitle}>
          By: {project.authors ? project.authors : "Unknown"}
        </h2>
        <p>{project.desc}</p>
        <a
          href={project.projectUrl}
          className={styles.projectCardButtonWrapper}
          target="_blank"
        >
          <button className={styles.projectCardButton}>Check it out</button>
        </a>
      </div>
    </div>
  );
}
