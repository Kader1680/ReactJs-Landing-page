import React from 'react'
import { useTranslation } from 'react-i18next';

const Translate = () => {
  const [ t, i18n ] = useTranslation("global");
    const HandelchangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
       }

  return (
    <div>
        <button class="border-0 bg-transparent"  onClick={()=>{HandelchangeLanguage("ar")} }>
             <img width={"30px"} src='https://static.vecteezy.com/system/resources/previews/016/328/950/original/saudi-arabia-flat-rounded-flag-icon-with-transparent-background-free-png.png' />

        </button>

        <button class="border-0 bg-transparent ms-1" onClick={()=>{HandelchangeLanguage("en")} }>
              <img width={"30px"} src='https://static.vecteezy.com/system/resources/previews/016/328/933/original/united-states-flat-rounded-flag-icon-with-transparent-background-free-png.png' />

        </button>
    </div>
  )
}

export default Translate