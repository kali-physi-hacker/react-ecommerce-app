import React from 'react';

import subscribeImg from '../../../assets/img/backgrounds/img-17.jpg';


const Subscribe = () => {
    return (
        <section className="slice slice-xl bg-cover bg-size--cover"
                 style={{backgroundImage: `url(${subscribeImg})`, backgroundPosition: "center center"}}>
            <span className="mask bg-dark opacity-2"></span>
            <div className="container py-6">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-6 text-center">
                        <div className="mb-5">
                            <h1 className="text-white">Always on time</h1>
                            <p className="lead text-white mt-2">You get all your ordered items just in time without compromises with trusted delivery agents.
                            Subscribe to get notifications on our amazing products and offers that suits your needs
                            </p>
                        </div>
                        <form>
                            <div className="form-group mb-0">
                                <div className="input-group input-group-lg input-group-merge rounded-pill bg-white">
                                    <input type="email" className="form-control form-control-flush" name="email"
                                           placeholder="Enter your email address" aria-label="Enter your email address" />
                                        <div className="input-group-append">
                                            <button className="btn btn-white text-dark" type="button">
                                                <span className="far fa-paper-plane"></span>
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Subscribe;