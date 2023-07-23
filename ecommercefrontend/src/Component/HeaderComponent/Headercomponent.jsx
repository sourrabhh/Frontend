import "./Headercomponent.scss"
import {TbSearch} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {CgShoppingCart} from "react-icons/cg"
import {useEffect, useState} from "react"
import Cart from "../Cart/Cart";
// import {useNavigate} from "react-router-dom"

const Headercomponent = () => { 

    const [scrolled, setScrolled] = useState(false);
    const [showcart, setShowcart] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            <header className ={ `main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">e-दुकान</div>

                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowcart(true)}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
        </header>

        {showcart && <Cart setShowcart = {setShowcart} />}
    </>
    )    
}

export default Headercomponent;