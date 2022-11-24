import React from "react";

const Dlc = ({greeting}) => {
    return (
        <div className="bg-dark">
            <h2 className="text-center text-primary fs-1">{greeting}</h2>
            <div className="Row d-flex flex-wrap justify-content-evenly">
                <div className="m-4 text-center shadow p-3 mb-3 bg-body rounded">
                    <p><img src="img/viking-conquest.jpg" alt="viking conquest" width={350} /></p>
                    <p className="fs-4">Mount and Blade: viking conquest</p>
                    <button className="btn m-1 btn-dark">Comprar</button>
                </div>
                <div className="m42 text-center shadow p-3 mb-3 bg-body rounded">
                    <p><img src="img/napoleonic-wars.jpg" alt="napoleonic" width={350} /></p>
                    <p className="fs-4">Mount and Blade: napoleonic wars</p>
                    <button className="btn m-1 btn-dark">Comprar</button>
                </div>
                <div className="m-4 text-center shadow p-3 mb-3 bg-body rounded">
                    <p><img src="img/fire-and-sword.jpg" alt="fire and sowrd" width={350} /></p>
                    <p className="fs-4">Mount and Blade: Fire and sword</p>
                    <button className="btn m-1 btn-dark">Comprar</button>
                </div>
                <div className="m-4 text-center shadow p-3 mb-3 bg-body rounded">
                    <p><img src="img/mnb.jpg" alt="mab classic" width={350} /></p>
                    <p className="fs-4">Mount and Blade: Classic</p>
                    <button className="btn m-1 btn-dark">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Dlc;