import { Header, Summary, Experience, Education, Skills } from "./Resume";
import "./App.css";

function App() {
  return (
    <main className="resume">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}

export default App;
