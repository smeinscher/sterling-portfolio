import styles from "./styles.module.css"

function About() {
  return (
    <>
      <h1 className={styles.header}>About</h1>
      <div className={styles.about_container}>
        <div className={styles.ramble_container}>
          <p>
            Hi, I'm Sterling Meinscher, a software developer with experience in mobile and game development. My tech journey began as a Data Curator, before transitioning into DevOps and Quality Assurance. Eventually, I moved into mobile development, specializing in React Native and TypeScript, where I contributed to GM's vehicle app, building features and improving user experiences.
          </p>
          <p>
            Beyond my professional experience, I have a deep interest in graphics programming and game development. In my free time, I work on cstrl, a game framework written in C and OpenGL. I've already built some simple games with it and am currently developing a Moon RTS game. To push my understanding of graphics further, I've also been exploring Vulkan, though it's still a work in progress.
          </p>
          <p>
            I currently live in Austin, Texas, where I balance my love for coding with training Brazilian Jiu-Jitsu and hanging out with my three awesome cats.

            Feel free to check out my work and connect—I'd love to collaborate or talk tech!
          </p>
        </div>
      </div>
    </>
  );
}

export default About
