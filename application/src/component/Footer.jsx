import React from 'react'

import { useTranslation } from 'react-i18next';
import Translate from './Translate';
const Footer = () => {
const [ t, i18n ] = useTranslation("global");

// const HandelchangeLanguage = (lang) => {
//   i18n.changeLanguage(lang)
//  }

  return (
    <div>
      {/* <h>my foooter</h><br></br>
      <button onClick={()=>{HandelchangeLanguage("en")}}>Englsih </button>
      <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button>
      <p   >{t("t")}</p>
      <p   >{t("c")}</p> */}
<footer  class="text-center text-lg-start bg-light text-muted pt-3">
  {/* <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
   
  </section>
   */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h4 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Landy
          </h4>
          <p>
            {t("title")}
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h4 class="text-uppercase fw-bold mb-4">
          {t("prod")}
          </h4>
          <p>
            <a href="#!" class="text-reset">{t("PolicyContent.a")} </a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("PolicyContent.b")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("PolicyContent.c")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("PolicyContent.d")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("PolicyContent.e")}</a>
          </p>
        </div>
       
        <div style={{ fontSize:"15px "}} class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h4 class="text-uppercase fw-bold mb-4">
          {t("use")}
          </h4>
          <p>
            <a href="#!" class="text-reset">{t("Usefeul.a")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("Usefeul.b")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("Usefeul.c")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("Usefeul.d")}</a>
          </p>
          <p>
            <a href="#!" class="text-reset">{t("Usefeul.e")}</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h4 class="text-uppercase fw-bold mb-4">Contact</h4>
          <p><i class="fas fa-home me-3"></i>{t("ny")}</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            {t("em")}
          </p>
          <p><i class="fas fa-phone me-3"></i> {t("ph")}</p>
          <p>
              <Translate />
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4 text-white " style={{ backgroundColor: "rgb(24, 33, 109) "}}>
    
    <span>{t("Footer")}
      <a   class="text-reset fw-bold" href="https://kader1680.github.io/Potfolio-Website/">{t("abdel")}</a>

    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer