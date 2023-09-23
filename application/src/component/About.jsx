import React, {useEffect} from 'react'
import gh from "../assests/graphs.svg"
import note from "../assests/notes.svg"
import about from  "../content/about.json"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next'
const About = () => {
    const [t, i18n] = useTranslation('global')
    
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
   
  return (
    <div data-aos = "fade-right" class='container about'>
        <div class='row'>
            <div class='col-md-6 d-flex align-items-center justify-content-center '>
                <img class="Img" src={gh} />
            </div>
            <div class='col-md-6 '>
                <h6>{t("titleAbout")}</h6>
                <p>{t("textAbout")} </p>
                
                <div class='row'>
                {about.section.map((iem, index)=>(
                    <div  key={index} class='col-6'> 
                        <img width="60px" height="60px"  src={note} />
                        <div style={{ fontSize: "12px" }} > {t("title")} </div>
                        <div style={{ fontSize: "11px" }} > {t("content")} </div>
                        
                    </div>
                ))} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About