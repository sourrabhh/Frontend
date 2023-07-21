import "./CategoryComponent.scss";
import Products from "../Products/Products";

const CategoryComponent = () => {
    return(
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Category Title </div>
                <Products innerPage = {true} />
            </div>
        </div>
    )
}

export default CategoryComponent;