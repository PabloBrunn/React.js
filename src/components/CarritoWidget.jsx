

const CarritoWidget = () => {
    return (
        <button type="button" className="btn bg-white position-relative">
            <img src="img/cart-dash.svg" alt="logo carrito" width="20" height="20" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CarritoWidget;