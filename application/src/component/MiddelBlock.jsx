import React, {useEffect} from 'react'
import middleBlock from "../content/middleBlock.json"
import Aos from 'aos'
import  'aos/dist/aos.css'
const MiddelBlock = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
    <div style={{ margin: "100px auto" }} data-aos = "fade-up" className='text-center middl container'>
        <h3>{middleBlock.title}</h3>
        <p> {middleBlock.text} </p>
        <button className='border-0 bg-primary pt-1 pb-1 ps-4 pe-4 ms-2'>{middleBlock.button} </button>

    </div>
  )
}

export default MiddelBlock