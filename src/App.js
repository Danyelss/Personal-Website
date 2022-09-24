import logo from './logo.svg';
import './App.css';
import Skills from "./components/Skills";
import ChangingText from "./components/ChangingText";

import techStackApps from "../src/images/techStackAppsW.png"
import vistaWellbeing from "../src/images/vistaWellbeing.png"
import nedaviSolar from "../src/images/nedaviSolar.png"
import csmOradea from "../src/images/csmOradea.png"
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App imgBackground box zoom">
      <header className="App-header">
        <ChangingText />
      </header>
      <body>
        <AboutMe />
        <Education />
        <Experience />        
      </body>

    </div >
  );
}

export default App;
