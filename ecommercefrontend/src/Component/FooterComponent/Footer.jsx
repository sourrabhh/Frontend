import "./Footer.scss";
import React from 'react';
import {FaLocationArrow, FaMobileAlt,FaEnvelope} from 'react-icons/fa';
// import payments from "../../assets/payments.png"

const Footer = () => {
    return(
        <footer className="footer-section">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                        <div className="text">
                            about text qqqqqqqqqqqqqqqqqqq
                            wwwwwwwwwwwwwwwwwww
                        </div>                               
                    </div>

                {/*About ENd  */}
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                            <FaLocationArrow />
                                <div className="text"> ABC, PQR Road, Pune. 411009</div>
                    </div>

                    <div className="c-items">
                            <FaMobileAlt />
                                <div className="text"> Phone : 1234567890 </div>                   
                    </div>

                    <div className="c-items">
                            <FaEnvelope />
                                <div className="text"> Email: abc@email.com </div>
                        </div>                   
                </div>
                    {/* COntact END  ********** */}
                <div className="col">
                    <div className="title">Categories</div>
                        <span className="text"> Laptop </span>
                        <span className="text"> Mobile </span>
                        <span className="text"> Camera </span>
                        <span className="text"> Cloaths </span>
                        <span className="text"> Grocery </span>                
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>                    
                </div>
            </div>
        
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">e-dukan 2023</div>
                </div>
                {/* <img src={payments} /> */}
            </div>
        </footer>
    )
}

export default Footer;