import "./ProductSub.scss";
import earphone from "../../../assets/earphone.png";

const ProductSub = () => {
    return(
        <div className="product-card">
            <div className="thumbnail">
                <img src={earphone} alt="" />
            </div>
            <div className="product-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    )
}

export default ProductSub;