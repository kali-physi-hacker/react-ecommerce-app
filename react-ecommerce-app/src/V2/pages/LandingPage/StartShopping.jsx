import React from "react";

import shopBg from '../../../assets/img/backgrounds/img-15.jpg';


const StartShopping = () => {
    return (
        <section className="slice slice-xl bg-cover bg-size--cover"
                 style={{backgroundImage: `url(${shopBg})`, backgroundPosition: "center center"}}>
            <span className="mask bg-primary opacity-9"></span>
            <div className="container py-6">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-7 text-center">
                        <div className="mb-5">
                            <h1 className="text-white">Try a new shopping experience</h1>
                            <p className="lead text-white mt-2">Go ahead click the button and explore our amazing and affordable but quality products</p>
                        </div>
                        <a href="#"
                           className="btn btn-white btn-icon rounded-pill shadow hover-shadow-lg hover-translate-y-n3">
                            <span className="btn-inner--text">Shop now</span>
                            <span className="btn-inner--icon"><i className="far fa-angle-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default StartShopping;