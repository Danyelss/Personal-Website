import './App.css';
// import Skills from "./components/Skills";
import ChangingText from "./components/ChangingText";


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
