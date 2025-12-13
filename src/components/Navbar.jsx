import "../styles/navbar.css"

import { FiShield } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";



export default function Navbar(){
    return (
        <>
        <div className="navbar_container">
            <div className="navbar_left">
                <span className="hero_logo" >
                    <FiShield size={30} color="white"  />
                </span>
                <div className="navbar_left_text">
                    <div className="navbar_left_title" >HDFC Ergo Health Expert</div>
                    <div className="navbar_left_location" >Ayodhya, Uttar Pradesh</div>
                </div>
            </div>
            <div className="navbar_right">

                <a href="#About">About</a>
                <a href="#Plans" >Health Plans</a>
                <a href="#Review">Reviews</a>
                <div className="call_now_btn" >
                    <a href="tel:+918652339403" className="call_now_btn_a_tag">
                        <span> < IoCallOutline color="white" size={20} /></span>
                        <span> Call Now </span>
                    </a>
                </div>

            </div>
            
        </div>
        
        </>
    )
}