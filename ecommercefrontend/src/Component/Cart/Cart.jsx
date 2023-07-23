import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";

const Cart = ({ setShowcart }) => {
    return(
        <div className="cart-panel">
            <div className="opacity-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-button" onClick={() => setShowcart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>
                {/*  */}
                <div className="empty-cart">
                    <BsCartX />
                    <span>Cart is Empty</span>
                    <button className="return-shop">Return to Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;