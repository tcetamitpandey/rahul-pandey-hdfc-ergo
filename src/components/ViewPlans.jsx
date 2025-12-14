import { useState } from "react"
import "../styles/viewplans.css"


import { IoMdCheckmarkCircleOutline } from "react-icons/io";


import { GrShieldSecurity } from "react-icons/gr";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";

export default function ViewPlans(){

    const [plans , setPlans] = useState([
        {
            logo_link : <GrShieldSecurity color="skyblue" size={30} />,
            title : "Optima Secure",
            selling_point : "Up to 4X Health Coverage with Automatic Growth",
            benifits : [
                "2X coverage from day one at no extra cost",
                "Coverage increases up to 4X with claim-free years",
                "100% restore of sum insured after a claim",
                "No room rent limits or disease-wise sub-limits",
            ]
        },
        {
            logo_link : <FaHeartbeat color="var(--red)" size={30} />,
            title : "Optima Super Secure",
            selling_point : "Premium Health Plan with Up to 5X Protection",
            benifits : [
                "3X coverage available from the first policy day",
                "Coverage grows up to 5X with no-claim benefits",
                "Non-medical expenses covered during hospitalization",
                "Daily hospital cash and emergency ambulance cover",
            ]
        },
        {
            logo_link : <IoMdPulse color="var(--green)" size={30} />,
            title : "Koti Suraksha(IPA) ",
            selling_point : "₹25 Lakh Accident Cover at Just ₹14 per Day",
            benifits : [
                "Comprehensive accident medical cover including hospitalization and day-care",
                "Weekly income support during temporary total disability",
                "Permanent disability protection up to 100% of sum insured",
                "Accidental death benefit with family and education support",
            ]
        },
    ])

    return (
        <>
        <div className="viewplans_container">

            <div className="view_plans_text">
                <div className="view_plans_text_title">Top Rated Plans for You</div>
                <div className="view_plans_text_desc">Comprehensive coverage options designed to meet every medical need and budget.</div>
            </div>
            <div className="view_plans_coverage">

                {
                    plans.map( (item)=>{
                        return (

                            <div className={`plan_card  plan_card_${item.title.replaceAll(" ","_")}`}>
                                <div className="plan_logo">
                                    {item.logo_link}
                                </div>
                                <div className="plan_text_section" >
                                    <div className="plan_title">{item.title}</div>
                                    <div className="plan_selling_point">{item.selling_point}</div>
                                </div>
                                
                                <div className="plan_benifits">
                                    {
                                    item.benifits.map( (beni)=>{
                                        return(
                                            <div className="beni_item">
                                                <span className="agent_general_information_service_check" > <IoMdCheckmarkCircleOutline color="var(--green)" size={20} /> </span>
                                                <span> {beni} </span>
                                            </div>
                                        )
                                    }

                                    )
                                    }
                                </div>

                                <div className="plan_buttons">
                                    <a
                                        href={`https://wa.me/918652339403?text=${encodeURIComponent(
                                            `I'm interested in ${item.title} Policy`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        Check Premium
                                    </a>
                                   
                                </div>

                            </div>
                            

                        )})
                }


            </div>
        </div>
        
        </>
    )
}