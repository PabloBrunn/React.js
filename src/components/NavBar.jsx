import CarritoWidget from "./CarritoWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-around">
                <nav className="bg-dark d-flex justify-content-evenly">
                    <Link to={"/"}><img src="/img/talesworlds.png" alt="logo" width={150} height={50} /></Link>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/juegos"} >JUEGOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/categoria"} >MERCHANDISING</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/categoria/remera"} >REMERAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/categoria/buzo"} >BUZOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/categoria/collar"} >COLLARES</Link>
                        </li>
                    </ul>
                </nav>
                <div className=" d-flex flex-row-reverse m-2">
                    <CarritoWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;