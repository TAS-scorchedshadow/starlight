import styles from "./ProjectSpread.module.css";
import type { ProjectSpreadProps } from "./ProjectSpreadLeft";

export default function ProjectSpreadRight({
  project,
  top_text,
}: ProjectSpreadProps) {
  return (
    <section className={styles.winnerSection}>
      <div className={styles.imgContainer}>
        <img src={project.thumbnailUrl}></img>
      </div>
      <div className={`${styles.winnerText} ${styles.textEnd}`}>
        <p className={styles.topText}>{top_text}</p>
        <h1>{project.name}</h1>
        <h2>By: {project.authors}</h2>
        <p className={styles.descriptionText}>{project.desc}</p>
        <a href={project.projectUrl} target="_blank">
          <button className={styles.spreadCardButton}>Check if out</button>
        </a>
      </div>
    </section>
  );
}
