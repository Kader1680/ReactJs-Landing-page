import React, {useEffect} from 'react'
import Aos from 'aos'
import dev from "../assests/developer.svg"
import 'aos/dist/aos.css'

import { useTranslation } from 'react-i18next';

const HeadBlock = () => {
    const [ t, i18n ] = useTranslation("global");
    const HandelchangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
       }

    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
    <div className='container'>
        <div data-aos = "fade-right" className='row '>
            <div style={{ padding: "20px" }} className='intro col-md-6 bg-light'>
                <button onClick={()=>{HandelchangeLanguage("en")}}>Englsih </button>
                <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button>
                <h3 className='w-50'>{t("title")}</h3>
                <p className='w-50'>{t("text")}</p>
                <div>
                    <button className='border-0 bg-primary pt-1 pb-1 ps-4 pe-4'>Explore</button>
                    <button className='border-0 bg-primary pt-1 pb-1 ps-4 pe-4 ms-2'>Learn More</button>
                </div>
            </div>
            <div className=' d-flex justify-content-center align-items-center col-md-6'>
                <img width={"100%"} src={dev} />
            </div>

        </div>
    </div>
  )
}

export default HeadBlock