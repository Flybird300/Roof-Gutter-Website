import React from 'react'
import './form.css'
import images from '../../assets/images'
import { Formik } from 'formik';
import {useFormik} from "formik"; 
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {

const [buttonSend, setButtonSend] = React.useState('Send')
const [buttonSent, setButtonSent] = React.useState('')

    const form = useRef();
       
    
    
    
    
    const formik = useFormik({
        
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            phoneNumber:"",
            message: "",
    
            
        },

        validationSchema: Yup.object({
            name: Yup.string()
            .max(20, "Name must be 20 charracters or less.")
            .required("Name is required"),
            lastName: Yup.string()
            .max(20, "Last Name must be 20 charracters or less.")
            .required("Last Name is required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
            
        }),
        onSubmit: (values, {setSubmitting, resetForm}) => {
           

            try{
            emailjs.sendForm('service_zkublda', 'template_b5t9275', form.current, 'ZPS09mZcvC1ih1hV-')
            .then(() => {
                setButtonSend('Message Sent');
                setButtonSent('Thank You For Your Message Check Your inbox for a reply we will get to you as soon as possible.');
                setSubmitting(false);
                resetForm();
                 });
          }
          catch {
             setSubmitting(false);
         }
        },
        
        
    });
   


    return (
        <div className='main-form'>
            <div className='form-headtext'>
                <h2>Contact Us</h2>
                </div>
            <div className='parent-form'>

                <div className='side-form'>
                <p>{buttonSent}</p>

                
                </div>

                {}
                <div className='app-form'>
                    

                    <form ref={form} onSubmit={formik.handleSubmit}>
        <div className='name-row'>
                        <div className='inputs'>
                    <label className={`name-label ${formik.errors.name && formik.touched.name ? 'Red' : ""}`} htmlFor='name'>

                {formik.touched.name && formik.errors.name ? formik.errors.name : "First Name"}
                    </label>
                    {}
                    <input
                name="name"
                type="text"
                placeholder='Enter your name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                    />

                    </div>
                    <div>
                    <label className={`name-label ${formik.errors.lastName && formik.touched.lastName ? 'Red' : ""}`} htmlFor='lastName'>
                    {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : "Last Name"}  
                    </label>
                    <input
                name="lastName"
                type="text"
                placeholder='Enter your Last name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                    />
                       </div>
            </div>
                      

                   

        <div className='name-row'>

                       <div className='inputs'>
                    <label className={` name-label ${formik.errors.email && formik.touched.email ? 'Red' : ""}`}  htmlFor='email'>
                    {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}  

                    </label>
                    <input
                name="email"
                type="email"
                placeholder='Enter your Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                    />

                    </div>
                    <div>
                    <label className='name-label' htmlFor='phone-number'>
                        Phone Number
                    </label>
                    <input
                name="phoneNumber"
                type="tel"
                placeholder='optional'
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                    />
                       </div>                      
                       </div>


                       <div>
                    <label className='name-label' htmlFor='message
                    '>
                    Message
                    </label>
                    <textarea
                name="message"
                type="text"
                placeholder='message'
                className=''
                value={formik.values.message}
                onChange={formik.handleChange}

                    ></textarea>
                       </div>  
                       
                       <div className='form-butt-div'>
                        <button className='info-button' value="send" type="submit">{buttonSend}</button>
                        </div>


                        <div className='send-img'> 
                        <img src={images.send} alt="send"></img>

                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
}
export default Form;