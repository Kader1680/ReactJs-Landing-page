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
    <div className='container'>
        <div data-aos = "fade-right" className='row '>
            <div style={{ padding: "20px" }} className='intro col-md-6'>
                {/* <button onClick={()=>{HandelchangeLanguage("en")}}>Englsih </button>
                <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button> */}
                <h6 className=''>{t("title")}</h6>
                <p className=''>{t("text")}</p>
                <div>
                    <button className='BTN'>Explore</button>
                    <button style={{ color: "rgb(46, 24, 106)" }} className='BTN bg-white ms-2'>Learn More</button>
                </div>
            </div>
            <div className=' d-flex justify-content-center align-items-center col-md-6'>
                <img  width={"100%"} src={dev} />
            </div>

        </div>
    </div>
  )
}

export default HeadBlock