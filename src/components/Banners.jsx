
import Dlc from '../components/Dlc';

const Banners = () => {
    return (
        <div className="bg-secondary">
            <div className="Row d-flex justify-content-evenly">
                <div className="m-5 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="img/bannerlord.jpg" alt="bannerlord" width={350} /></p>
                    <h4>Mount and Blade: Bannerlord</h4>
                </div>
                <div className="m-5 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="img/warband.jpg" alt="warband" width={350} /></p>
                    <h4>Mount and Blade: Bannerlord</h4>
                </div>
            </div>
            <Dlc greeting="Mount and blade : DLC" />
        </div>
    )
}

export default Banners;