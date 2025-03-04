import SterlingMeinscher from "/SterlingMeinscher.png"
import styles from "./styles.module.css"

function Home() {
  return (
    <>
      <h1 className={styles.header}>Home</h1>
      <div className={styles.image_container}>
        <img
          className={styles.sm_image}
          src={SterlingMeinscher}
          width="500"
          height="500"
        />
      </div>
      <div style={{textAlign: "center" }} className={styles.ramble_container}>
        <p>(210)-589-1296</p>
        <p><a className={styles.link_contacts} href="mailto:sterling@meinscher.com">sterling@meinscher.com</a></p>
        <p><a className={styles.link_contacts} href="https://github.com/smeinscher">github.com/smeinscher</a></p>
        <p><a className={styles.link_contacts} href="https://www.linkedin.com/in/sterling-meinscher/">LinkedIn</a></p>
      </div>
    </>
  );
}

export default Home
