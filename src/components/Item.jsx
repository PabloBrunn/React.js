import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="d-flex justify-content-around" key={item.id}>
                <div className="col-md-8 my-8 m-4">
                    <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <button className="btn btn-primary">Ver Más</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;