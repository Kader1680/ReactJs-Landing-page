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
import ScrollTop from './component/ScrollTop';

function App() {
  // const ScrollTop = () => {
  //   return (
     
  //       
          
      
  //   )
  // }
  return (
    <div className="App ">
     <Navbar />
     {/* <div style={{ position: "fixed",top: "50%", right: "10%", zIndex: "5", }}>
        <Translate  />

     </div> */}
     <HeadBlock />
     <MiddelBlock />
     <About />
     <Rocket />
     <Contact />
     <button className='border-0 bg-transparent' onClick = {()=>{window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}><ScrollTop  /></button>
     <Footer />
    </div>
  );
}

export default App;
