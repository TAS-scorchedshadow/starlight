import type { CardType } from "../data/starlight";
import styles from "./ProjectSpread.module.css";

export default function ProjectSpreadRight({ project }: { project: CardType }) {
  return (
    <section className={styles.winnerSection}>
      <div className={`${styles.winnerText} ${styles.textStart}`}>
        <h1>{project.name}</h1>
        <h2>By: {project.authors}</h2>
        <p>{project.desc}</p>
        <a href={project.projectUrl} target="_blank">
          <button className={styles.spreadCardButton}>Check if out</button>
        </a>
      </div>
      <div className={styles.imgContainer}>
        <img src={project.thumbnailUrl}></img>
      </div>
    </section>
  );
}
