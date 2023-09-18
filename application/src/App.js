import logo from './logo.svg';
import './App.css';
import HeadBlock from './component/HeadBlock';
import MiddelBlock from './component/MiddelBlock';
import About from './component/About';
import Rocket from './component/Rocket';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App ">
     <HeadBlock />
     <MiddelBlock />
     <About />
     <Rocket />
     <Contact />
    </div>
  );
}

export default App;
