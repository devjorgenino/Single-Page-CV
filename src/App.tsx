import "./App.css";
import { Divider } from "./components/Divider/divider";
import Header from "./components/Header/header";
import Education from "./components/Sections/Education/educations";
import Experience from "./components/Sections/Experience/experience";
import Skills from "./components/Sections/Skills/skills";

function App() {
  return (
    <>
      <Header />
      <Divider />

      <Skills />
      <Divider />

      <Education />
      <Divider />

      <Experience />
      <Divider />
    </>
  );
}

export default App;
