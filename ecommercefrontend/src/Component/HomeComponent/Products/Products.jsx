import './Products.scss';
import "./ProductSub/ProductSub";
import ProductSub from './ProductSub/ProductSub';

const Products = () => {
    return(
        <div className='products-container'>
            <div className="section-heading"> Section Heading </div>
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