import "../styles/agent.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";


export default function Agent(){
    return (
        <>

        <div className="agent_container">

            <div className="agent_info_section">
                <div className="agent_image_wrapper">
                    <div className="agent_image_section">
                        <img src="./rahul2.jpg" height={200} alt="Agent" />
                    </div>

                    <div className="agent_image_section_check">
                        <MdOutlineCheck color="white" size={20} />
                    </div>
                </div>

                <div className="agent_general_information">
                    <div>
                         <div className="agent_general_information_title">Namaste, I'm Mr. Pandey</div>
                         <div className="agent_general_information_position">Sr. Health Advisor</div>

                    </div>
                   <div className="agent_general_information_about">With over 10 years of experience in the insurance industry, I help families in Ayodhya navigate the complexities of health insurance. My goal isn't just to sell a policy, but to ensure you have the right coverage when you need it most. I provide 100% assistance during claims—so you can focus on recovery, not paperwork.</div>
                    <div className="agent_general_information_service">
                        <div>
                            <span className="agent_general_information_service_check" > <IoMdCheckmarkCircleOutline color="var(--green)" size={20} /> </span>
                            <span>Instant Policy</span>
                        </div>
                        <div>
                            <span className="agent_general_information_service_check" > <IoMdCheckmarkCircleOutline color="var(--green)" size={20} /> </span>
                            <span>Free Consultation</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}