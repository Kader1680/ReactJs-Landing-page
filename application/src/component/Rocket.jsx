import React, {useEffect} from 'react'
import rocket from  "../content/rocket.json"
import rock from "../assests/product-launch.svg"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next'
const Rocket = () => {
    const [t, i18n] = useTranslation("global")
    
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);
  return (
    <div data-aos ="fade-left" class="container rocket">
        <div class="row">
            <div class=" col-md-6 d-flex align-items-center justify-content-center ">
                <img class="Img" style={{   width: "20rem;" }}  src={rock} />
            </div>
            <div class=" col-md-6">
                <h3>{t("titleRocket")}</h3>
                <p>{t("textRocket")}</p>
            </div>
        </div>
    </div>
  )
}

export default Rocket