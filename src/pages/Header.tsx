import { Link } from "react-router-dom"
import styles from "./styles.module.css"

function Header() {
  return(
  <div className={styles.header_container}>
    <Link className={styles.link} to="/">Home</Link>
    <Link className={styles.link} to="/projects">Projects</Link>
    <Link className={styles.link} to="/about">About</Link>
  </div>
  );
}

export default Header
