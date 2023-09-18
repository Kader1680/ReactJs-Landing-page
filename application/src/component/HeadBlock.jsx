import React, {useEffect} from 'react'
import intro from "../content/intro.json"
import Aos from 'aos'
import dev from "../assests/developer.svg"
import 'aos/dist/aos.css'
const HeadBlock = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
    <div className='container'>
        <div data-aos = "fade-right" className='row '>
            <div style={{ padding: "20px" }} className='intro col-md-6 bg-light'>
                <h3 className='w-50'>{intro.title}</h3>
                <p className='w-50'>{intro.text}</p>
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