import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
// import formInfo from "../content/form.json"
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';




const Contact = () => {
    const { register, handleSubmit, watch, formState:{errors}  } = useForm()
    const suusss = (data) => console.log(data)
    
    console.log(watch("Name"))
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);

    const [ t, i18n ] = useTranslation("global");

  return (
    <div data-aos= "fade-up" style={{ marginBottom:" 5rem" }} className='container'>
        <div class="row">
              <div class="col-md-6 ">
                    {/* <h3>{formInfo.title}</h3>
                    <p>{formInfo.text}</p> */}
              </div>
              <div class="col-md-6">
                <form onSubmit={handleSubmit(suusss)}>
                    <label>{t("name")}</label><br></br>
                    <input {...register("Name", {required: true})} placeholder='Name' /><br></br>
                    {/* if type of the input Name == false that (mean &&)  */}
                    <div className='text-danger'>{errors.Name?.type =="required" && "The Name is required"}</div>
                    <label>{t("Email")}</label><br></br>
                    <input {...register("Email", {required: true})} placeholder='Email' /><br></br>
                    <div className='text-danger'>{errors.Email?.type =="required" && "The Email is required"}</div>
                    <label>{t("password")}</label><br></br>
                    <input {...register("Password", {required: true, maxLength: 5})} placeholder='Password' /><br></br>
                    <div className='text-danger'>{errors.Password?.type ==="required" && "The Password is required"}</div>
                    <div className='text-danger'>{errors.Password?.type ==="maxLength" && "The maxlenght is 5"}</div>
                    <label>{t("confirm")}</label><br></br>
                    <input {...register("ConfirmPassword", {required: true})} placeholder='Confirm Password' /><br></br>
                    <div className='text-danger'>{errors.ConfirmPassword?.type =="required" && "Please Confirm Password"}</div>
                    <label >{t("message")}</label><br></br>
                    <input   placeholder='Message' /><br></br>
                    <button className='BTN'>{t("submit")}</button>
                </form>
                
              </div>
        </div>
        
    </div>
  )
}

export default Contact