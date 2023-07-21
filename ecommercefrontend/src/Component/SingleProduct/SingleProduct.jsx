import "./SingleProduct.scss";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCartPlus, FaWhatsapp} from "react-icons/fa";
import laptop from "../../assets/laptop.png";
import RelatedProduct from "../SingleProduct/RelatedProducts/RelatedProduct";

const SingleProduct = () => {
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={laptop} alt=""></img>
                    </div>
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="price">Price</span>
                        <span className="desc">Description</span>

                        <div className="cart-button">
                            <div className="quantity-button">
                                <span> - </span>
                                <span> 5 </span>
                                <span> + </span>    
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                Add To Cart
                            </button>
                        </div>

                        <span className="divider"></span>

                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Headphone</span>
                            </span>

                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaWhatsapp size={16} />
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>                           
                        </div>
                    </div>
                </div>

                <RelatedProduct />
            </div>
        </div>
    )
}

export default SingleProduct;