import './Products.scss';
import "./ProductSub/ProductSub";
import ProductSub from './ProductSub/ProductSub';




const Products = ({ innerPage, headingText }) => {
    return(
        <div className='products-container'>
            { !innerPage && <div className="section-heading"> {headingText} </div> }  {/*//for not showing section heading properties */}
            <div className='products'>
                <ProductSub />
                <ProductSub />
                <ProductSub />
                <ProductSub />
                <ProductSub />
                <ProductSub />
                <ProductSub />
                <ProductSub />
            </div>
        </div>
    )
};

export default Products;