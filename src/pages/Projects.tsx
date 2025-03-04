import styles from "./styles.module.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Omega from "../assets/omega.png"
import Cstrl from "../assets/cstrl.png"

function Projects() {
  return (
    <>
      <h1 className={styles.header}>Projects</h1>
      <Container fluid="lg" className={styles.card_container}>
        <Card className={styles.card}>
          <Card.Img variant="top" src={Omega} />
          <Card.Body>
            <Card.Title>Omega</Card.Title>
            <Card.Text style={{ textAlign: "left" }}>Turn-based hex grid game, written in C. Used OpenGL for rendering and GLFW for platform functionality, such as windowing and keyboard input. This project was an experiment into Data Oriented Design, and the core of this project inspired the creation of cstrl.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="https://github.com/smeinscher/Omega" className="btn btn-lg btn-block btn-primary" style={{ borderColor: "#984447", backgroundColor: "#984447", marginTop: "auto" }} variant="primary">Source</Button>
          </Card.Footer>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant="top" src={Cstrl} style={{ margin: "0.025rem" }}/>
          <Card.Body>
            <Card.Title>cstrl</Card.Title>
            <Card.Text style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>Custom game framework, written in C. Minimized external libraries used, for more control and understanding of what the code is doing. Above screenshot is a game I'm developing with the framework.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="https://github.com/smeinscher/cstrl" className="btn btn-lg btn-block btn-primary" style={{ borderColor: "#984447", backgroundColor: "#984447", marginTop: "auto" }} variant="primary">Source</Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default Projects
