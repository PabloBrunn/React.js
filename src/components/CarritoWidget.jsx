import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const CarritoWidget = () => {
    
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btn bg-white position-relative">
            <img src="/img/cart-dash.svg" alt="logo carrito" width="20" height="20" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
                <span className="visually-hidden">unread messages</span>
            </span>
        </Link>
    )
}

export default CarritoWidget;