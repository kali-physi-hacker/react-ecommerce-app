import React from 'react';

import productImg1 from '../../../assets/img/theme/light/product-1.png';
import productImg2 from '../../../assets/img/theme/light/product-2.png';
import productImg3 from '../../../assets/img/theme/light/product-3.png';
import productImg4 from '../../../assets/img/theme/light/product-4.png';
import productImg5 from '../../../assets/img/theme/light/product-5.png';
import productImg6 from '../../../assets/img/theme/light/product-6.png';
import productImg7 from '../../../assets/img/theme/light/product-7.png';
import productImg8 from '../../../assets/img/theme/light/product-8.png';


const SwipperSlide = props => {
    return (
        <div className="swiper-slide p-3">
            <a href="#">
                <div className="hover-scale-110">
                    <img alt="Image placeholder"
                         src={props.img}
                         className="img-fluid img-center" />
                </div>
            </a>
            <div className="text-center mt-3">
                <a href="#" className="h6 font-weight-bolder">{props.name}</a>
            </div>
        </div>
    )
}

const CommonProducts = () => {

    const products = [
        {name: "Home Base", img: productImg1, id:1},
        {name: "Home Controller", img: productImg2, id:2},
        {name: "Adapt Earphones", img: productImg3, id:3},
        {name: "Smart Pixel 3", img: productImg4, id:4},
        {name: "TV Chromecast", img: productImg5, id:5},
        {name: "Ear Buds", img: productImg6, id:6},
        {name: "Fitness Legging", img: productImg7, id:7},
        {name: "Long sleeved shirt", img: productImg4, id:8},
        {name: "Fitness shirt", img: productImg8, id:9},
        {name: "Running hat", img: productImg1, id:10},
    ]

    return (
        <section className="slice pt-lg-0 bg-section-secondary">
            <div className="container swiper-js-container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="swiper-container" data-swiper-items="2" data-swiper-space-between="20"
                             data-swiper-sm-items="4" data-swiper-sm-space-between="20" data-swiper-lg-items="6"
                             data-swiper-lg-space-between="20">
                            <div className="swiper-wrapper">
                                {products.map(product=> (
                                    <SwipperSlide key={product.id} name={product.name} img={product.img} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default CommonProducts;