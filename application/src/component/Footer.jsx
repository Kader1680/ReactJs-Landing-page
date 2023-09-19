import React from 'react'

import { useTranslation } from 'react-i18next';
const Footer = () => {
const [ t, i18n ] = useTranslation("global");

const HandelchangeLanguage = (lang) => {
  i18n.changeLanguage(lang)
 }

  return (
    <div>
      <h>my foooter</h><br></br>
      <button onClick={()=>{HandelchangeLanguage("en")}}>Englsih </button>
      <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button>
      <p   >{t("t")}</p>
      <p   >{t("c")}</p>
    </div>
  )
}

export default Footer