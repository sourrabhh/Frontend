import "./Newsletter.scss"
import{
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa"

const Newsletter = () => {
    return(
        <div className="newsletter-section">
            <div className="newsletter-content">
                <div className="small-text"> Newsletters </div>
                <span className="big-text">Sign Up for latest updates and offers </span>

                <div className="form">
                    <input type="text" placeholder="Email Address"></input>
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordence with our Privacy Policy</div>

                <div className="social-icons">
                    <div className="icons">
                        <FaTwitter size={14}/> 
                    </div>

                    <div className="icons">
                        <FaLinkedin size={14}/> 
                    </div>

                    <div className="icons">
                        <FaInstagram size={14}/> 
                    </div>
                </div> 
            </div>
        </div>
    )
} 

export default Newsletter;