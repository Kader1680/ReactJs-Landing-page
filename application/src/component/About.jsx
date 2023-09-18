import React, {useEffect} from 'react'
import gh from "../assests/graphs.svg"
import note from "../assests/notes.svg"
import about from  "../content/about.json"
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
   
  return (
    <div data-aos = "fade-right" className='container about'>
        <div className='row'>
            <div className='col-md-6 d-flex align-items-center justify-content-center '>
                <img src={gh} />
            </div>
            <div className='col-md-6 '>
                <h3>{about.title}</h3>
                <p>{about.text} </p>
                
                <div className='row'>
                {about.section.map((item)=>(
                    <div  className='col-6'> 
                        <img width="60px" height="60px"  src={note} />
                        <div style={{ fontSize: "12px" }} > {item.title} </div>
                        <div style={{ fontSize: "11px" }} > {item.content} </div>
                        
                    </div>
                ))} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About