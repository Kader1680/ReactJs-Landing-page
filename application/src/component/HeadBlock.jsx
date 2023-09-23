import React, {useEffect} from 'react'
import Aos from 'aos'
import dev from "../assests/developer.svg"
import 'aos/dist/aos.css'

import { useTranslation } from 'react-i18next';

const HeadBlock = () => {
    const [ t, i18n ] = useTranslation("global");
    

    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
    <div class='container'>
        <div style = {{ padding: "50px 0px" }} data-aos = "fade-right" class='row '>
            <div style={{ padding: "20px" }} class='intro col-md-6'>
                {/* <button onClick={()=>{HandelchangeLanguage("en")}}>Englsih </button>
                <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button> */}
                <h6 class=''>{t("title")}</h6>
                <p class=''>{t("text")}</p>
                <div>
                    <button class='BTN'>Explore</button>
                    <button style={{ color: "rgb(46, 24, 106)" }} class='BTN bg-white ms-2'>Learn More</button>
                </div>
            </div>
            <div class=' d-flex justify-content-center align-items-center col-md-6'>
                <img  width={"100%"} src={dev} />
            </div>

        </div>
    </div>
  )
}

export default HeadBlock