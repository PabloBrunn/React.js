import React from "react";

const Footer = () => {
    return (
        <div className="bg-secondary text-center">
            <img src="img/logo-footer.png" alt="logo" width={200} className="m-4" />
            <div className="d-flex justify-content-center ">
                <img src="img/icons8-facebook-48.png" alt="logo insta" />
                <img src="img/icons8-instagram-48.png" alt="logo face" className="" />
                <img src="img/icons8-twitter-48.png" alt="logo twitter" />
                <img src="img/icons8-youtube-play-48.png" alt="logo youtube" />
            </div>
        </div>
    )
}

export default Footer;