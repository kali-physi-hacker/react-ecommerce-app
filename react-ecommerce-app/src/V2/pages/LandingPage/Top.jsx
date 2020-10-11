import React from 'react';

import TopBg from '../../../assets/img/backgrounds/img-16.jpg';
import {Link} from "react-router-dom";


const Top = () => {
    return (
        <section className="slice slice-xl bg-cover bg-size--cover" data-offset-top="#header-main"
                 style={{backgroundImage: `url(${TopBg})`, backgroundPosition: "center center"}}>
            <span className="mask bg-dark opacity-3"></span>
            <div className="container py-5 pt-lg-7 position-relative zindex-100">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="alert alert-modern alert-dark">
                              <span className="badge badge-warning badge-pill">
                                New
                              </span>
                            <span className="alert-content">Enhance your home experience with online shopping</span>
                        </div>
                        <div className="">
                            <h2 className="text-white my-4">
                                <span className="display-4 font-weight-light">The Shop</span>
                                <span className="d-block">that improves <strong
                                    className="font-weight-light">lives</strong>.</span>
                            </h2>
                            <p className="lead text-white">A unique and beautiful way of buying any collection or category
                                of items. Order items with just a single click and follow just a simple three (3) steps to get your items
                                ordered
                            </p>
                            <div className="mt-5">
                                <Link href="/products"
                                   className="btn btn-white rounded-pill hover-translate-y-n3 btn-icon d-none d-xl-inline-block scroll-me">
                                    <span className="btn-inner--icon"><i className="far fa-shopping-bag"></i></span>
                                    <span className="btn-inner--text">Go shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-grid mt-6 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <div className="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                            <div className="card-body py-4">
                                <div className="d-flex align-items-start">
                                    <div className="icon bg-gradient-primary text-white rounded-circle icon-shape">
                                        <i className="far fa-shipping-fast"></i>
                                    </div>
                                    <div className="icon-text pl-4">
                                        <h5 className="ma-0  text-white">Fast shipping</h5>
                                        <p className="mb-0 text-muted">
                                            Even without express shipping, we deliver you items in 4 - 5 working days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                            <div className="card-body py-4">
                                <div className="d-flex align-items-start">
                                    <div className="icon bg-gradient-primary text-white rounded-circle icon-shape">
                                        <i className="far fa-credit-card"></i>
                                    </div>
                                    <div className="icon-text pl-4">
                                        <h5 className="ma-0  text-white">Online payment</h5>
                                        <p className="mb-0 text-muted">Pay online with almost any online payment method at the comfort of your home</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-dark border-0 hover-shadow-lg hover-translate-y-n10">
                            <div className="card-body py-4">
                                <div className="d-flex align-items-start">
                                    <div className="icon bg-gradient-primary text-white rounded-circle icon-shape">
                                        <i className="far fa-hand-holding-usd"></i>
                                    </div>
                                    <div className="icon-text pl-4">
                                        <h5 className="ma-0  text-white">Refund guarantee</h5>
                                        <p className="mb-0 text-muted">We value your pleas, moneys are returned back when there's a problem with the order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-container" data-shape-position="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                     preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1000 300"
                     style={{enableBackground: "new 0 0 1000 300"}} space="preserve"
                     className="ie-shape-wave-1 fill-section-secondary">
                    <path
                        d="M 0 246.131 C 0 246.131 31.631 250.035 47.487 249.429 C 65.149 248.755 82.784 245.945 99.944 241.732 C 184.214 221.045 222.601 171.885 309.221 166.413 C 369.892 162.581 514.918 201.709 573.164 201.709 C 714.375 201.709 772.023 48.574 910.547 21.276 C 939.811 15.509 1000 24.025 1000 24.025 L 1000 300.559 L -0.002 300.559 L 0 246.131 Z"/>
                </svg>
            </div>
        </section>
    )
}


export default Top;