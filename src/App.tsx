import Header from "./pages/Header.tsx"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import About from "./pages/About.tsx"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App
