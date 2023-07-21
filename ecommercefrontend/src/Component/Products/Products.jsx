import './Products.scss';
import "./ProductSub/ProductSub";
import ProductSub from './ProductSub/ProductSub';

const Products = ({ innerPage }) => {
    return(
        <div className='products-container'>
            { !innerPage && <div className="section-heading"> Section Heading </div> }  {/*//for not showing section heading properties */}
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