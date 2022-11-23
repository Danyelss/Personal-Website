import './App.css';
// import Skills from "./components/Skills";
import ChangingText from "./components/ChangingText";
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App imgBackground">
      <header className="App-header">
        <ChangingText />
      </header>
      <div className='background-body'>
        <AboutMe />
        <Education />
        <Experience />    
      </div>
    </div >
  );
}

export default App;
