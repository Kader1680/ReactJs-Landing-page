import logo from './logo.svg';
import './App.css';
import HeadBlock from './component/HeadBlock';
import MiddelBlock from './component/MiddelBlock';
import About from './component/About';
import Rocket from './component/Rocket';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Translate from './component/Translate';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App ">
     <Navbar />
     <Translate />
     <HeadBlock />
     <MiddelBlock />
     <About />
     <Rocket />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
