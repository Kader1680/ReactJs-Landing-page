import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);

  return (
    <div className='container'>
        <form>
            <label>Name</label><br></br>
            <input placeholder='Name' /><br></br>
            <label>Email</label><br></br>
            <input placeholder='Email' /><br></br>
            <label>Message</label><br></br>
            <input placeholder='Name' /><br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact