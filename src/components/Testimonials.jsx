import { useState } from "react"
import "../styles/testimonials.css"
import { TiStarFullOutline } from "react-icons/ti";
import Marquee from "react-fast-marquee";


export default function Testimonials(){

    const [user_testimonials, setUserTestimonials] = useState([
        {
            user_name : "Amit Pandey",
            user_location : "Faizabad, UP",
            user_words : `"Mr. Pandey guided me perfectly for my parents' health insurance. When my father was hospitalized in Lucknow, he handled the cashless process smoothly."`
        },
        {
            user_name : "Amit Singh",
            user_location : "Civil Lines, Ayodhya, UP",
            user_words : `"Best agent in Faizabad. Very polite and knowledgeable. He suggested Optima Secure which gave us double coverage instantly."`
        },
        {
            user_name : "Suraj Tripathi",
            user_location : "Bast, UP",
            user_words : `"Professional service. I bought a policy for my whole family. The documentation was quick and digital."`
        },
    ])
    return (
        <>

        <div className="testimonial_container">
            <div className="testi_title">Trusted by Families Across India</div>
            <div className="testi_subtitle">
            Real experiences from customers who secured their family’s future with us.
            </div>

             < Marquee speed={40} pauseOnHover gradient={false} autoFill>
            <div className="card_container" >
               
                { user_testimonials.map( (user)=>{ 
                    return (
                    <div className="map_user_card">
                                <div className="map_user_rating"> 
                                    <TiStarFullOutline color="yellow" /> 
                                    <TiStarFullOutline color="yellow" /> 
                                    <TiStarFullOutline color="yellow" /> 
                                    <TiStarFullOutline color="yellow" /> 
                                    <TiStarFullOutline color="yellow" /> 
                                </div>
                                <div className="map_user_words">{user.user_words}</div>
                                <div className="user_personl_section">

                                    <div className="map_user_initials">
                                        {user.user_name[0]}
                                    </div>
                                    <div>
                                        <div className="map_user_name">{user.user_name}</div>
                                        <div className="map_user_location">{user.user_location}</div>

                                    </div>
                                    
                                </div>
                                

                    </div>)
                            
                })}
            
               

            </div>
             </Marquee>
            

            
        </div>

        </>
    )
}