import React from "react";
import CarritoWidget from "./CarritoWidget";

const NavBar = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-around">
                <nav className="bg-dark d-flex justify-content-evenly">
                    <img src="img/talesworlds.png" alt="logo" width={150} height={50} />
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">JUEGOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DLC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COMPANIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NOTICIAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COMUNIDAD</a>
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