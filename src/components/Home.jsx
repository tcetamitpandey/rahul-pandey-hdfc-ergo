import "../styles/home.css"
import { GrLocation } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import emailjs from "@emailjs/browser";


import toast from "react-hot-toast";



export default function Home(){

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData, setFormData ] = useState({
        fullName : "",
        phoneNumber : "",
        age : "",
        city : ""
    })

    function handle_Form(e) {
        e.preventDefault();

        const { fullName, phoneNumber, age, city } = formData;

        if (
            fullName.length === 0 ||
            phoneNumber.length < 7 || phoneNumber.length > 15 ||
            age <= 0 || age > 100 ||
            city.length === 0
        ) {
            toast.error("Please Provide All the Details");
            return;
        }

        const templateParams = {
            full_name: fullName,
            phone: phoneNumber,
            age: age,
            city: city,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                toast.success("Form Submitted Successfully");

                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    age: "",
                    city: ""
                });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                toast.error("Something went wrong. Try again.");
            });
}


    function handle_values_change(e){
        setFormData( (prev)=>{ return (
            {
                ...prev , [e.target.name] : e.target.value
            }
        )
        })

        // console.log(e.target.value)
    }

    return (
        <>
        <div className="home_container">
            <div className="home_left">
                <div className="home_location">
                    <span> <GrLocation size={15}/> </span>
                    <span>Present in Ayodhya & Faizabad</span>
                </div>

                <div className="home_hero_title">
                    <span className="home_hero_title_main" > Protect Your Family's </span>
                    <span className="home_hero_title_sub" >Future Today</span>
                </div>

                <div className="home_hero_desc">
                    Authorized HDFC Ergo Health Insurance partner. Get cashless treatment at top hospitals in Ayodhya and across India.
                </div>

                <div className="home_hero_sub_title">
                    Over 500+ families secured.
                </div>

                <div className="home_btn">

                    <a href="#reviews" className="btn btn_left" >What Customers Say</a>
                    <a href="#viewplans" className="btn btn_right">
                        <span> View Plans </span> 
                        <span className="btn_right_icon" > <FaArrowRightLong /> </span>
                    </a>
                </div>

            </div>
            <div className="home_right">
                <div className="form_pattern" ></div>
                <div className="form_section">
                    <div className="form_section_text" >

                        <div className="home_right_title">Get a Free Quote</div>
                        <div className="home_right_sub">Best HDFC Ergo plans customized for Ayodhya residents.</div>

                    </div>


                    <form onSubmit={handle_Form} >
                        <div>
                             <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" placeholder="e.g. Amit Pandey" onChange={handle_values_change} value={formData.fullName} />


                        </div>
                       
                        <div className="form_phone_age_section">
                            <div>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="text" name="phoneNumber"  placeholder="+91 9321080..."  onChange={handle_values_change} value={formData.phoneNumber} />

                            </div>

                            <div>

                                <label htmlFor="age">Age</label>
                                <input type="number" name="age" id=""  placeholder="e.g. 28"  onChange={handle_values_change} value={formData.age} />

                            </div>
                           
                        </div>
                        <div className="form_city_section">

                        <label htmlFor="city">City</label>
                        <select name="city" onChange={handle_values_change} value={formData.city} >
                            <option disabled selected style={{backgroundColor:"red !important"}} value="">Select City</option>
                            <option value="Ayodhya" >Ayodhya</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Gorakhpur">Gorakhpur</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                        
                        

                        <button className="btn btn_left form_main_btn" ><span> Get Quote Now  </span><span><FaTelegramPlane size={20} /></span> </button>
                        <span className="form_section_bottom_t_and_c" >By submitting, you agree to receive a call from our agent.</span>
                        
                    </form>
                    
                </div>
                

            </div>
        </div>
        <div className="CTA_values" >
            <div className="cta_claims">
                <div className="cta_claims_text" >15000+</div>
                <div className="cta_claims_value" >Cashless Health Network</div>
            </div>
            <div className="cta_claims">
                <div className="cta_claims_text" >98%</div>
                <div className="cta_claims_value" >Claim Settlement</div>
            </div>
            <div className="cta_claims">
                <div className="cta_claims_text" >24/7</div>
                <div className="cta_claims_value" >Support Available</div>
            </div>
            <div className="cta_claims">
                <div className="cta_claims_text" >No Cost</div>
                <div className="cta_claims_value" >EMI Options</div>
            </div>


        </div>
        </>
    )
}