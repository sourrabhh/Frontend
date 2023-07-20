import "./Category.scss";
import cat1laptopImage from "../../../assets/cat1laptopImage.png";

const Category = () => {
    return(
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1laptopImage} alt = ""/>
                </div>
                <div className="category">
                    <img src={cat1laptopImage} alt = ""/>
                </div>
                <div className="category">
                    <img src={cat1laptopImage} alt = ""/>
                </div>
                <div className="category">
                    <img src={cat1laptopImage} alt = ""/>
                </div>
            </div>
        </div>
    )
};

export default Category;