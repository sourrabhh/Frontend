import "./Cartitem.scss";
import {MdClose} from "react-icons/md";
import laptop from "./../../../assets/laptop.png";

const Cartitem = () =>{
    return(
        <div className="cart-product-main">
            <div className="cart-product">
                <div className="img-container">
                    <img src={laptop} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-name">product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-button">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>*</span>
                        <span className="highlight">&#8377;4567 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitem;