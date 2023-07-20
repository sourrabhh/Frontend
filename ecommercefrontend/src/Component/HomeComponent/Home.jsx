import "./Home.scss"
import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "./Products/Products";

export default function Home(){
    return(
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category /> 
                    <Products />
                </div>
            </div>          
        </div>
    )
}