

const Dlc = ({ greeting }) => {

    const arraydlc = [
        { id: "1", nombre: "Mount and Blade: viking conquest", img: "img/viking-conquest.jpg", alt: "viking conquest" },
        { id: "2", nombre: "Mount and Blade: napoleonic wars", img: "img/napoleonic-wars.jpg", alt: "napoleonic" },
        { id: "3", nombre: "Mount and Blade: fire and sword", img: "img/fire-and-sword.jpg", alt: "fire-and-sword" },
        { id: "4", nombre: "Mount and Blade: classic", img: "img/mnb.jpg", alt: "mab-classic" }
    ]


    return (
        <div className="bg-dark">
            <h2 className="text-center text-primary fs-1">{greeting}</h2>
            <div className="Row d-flex flex-wrap justify-content-evenly">
                {
                    arraydlc.map(dlc =>
                        <div className="m-4 text-center shadow p-3 mb-3 bg-body rounded" key={dlc.id}>
                            <p><img src={dlc.img} alt={dlc.alt} width={350} /></p>
                            <p className="fs-4">{dlc.nombre}</p>
                            <button className="btn m-1 btn-dark">Comprar</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Dlc;