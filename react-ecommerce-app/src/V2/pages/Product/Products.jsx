import React from "react";
import Header from "../../components/Header/Header";
import ProductCard from "./ProductCard";


import productImg1 from "../../../assets/img/theme/light/product-1.png";
import productImg2 from "../../../assets/img/theme/light/product-2.png";
import productImg3 from "../../../assets/img/theme/light/product-3.png";
import productImg4 from "../../../assets/img/theme/light/product-4.png";
import productImg5 from "../../../assets/img/theme/light/product-5.png";
import productImg6 from "../../../assets/img/theme/light/product-6.png";
import productImg7 from "../../../assets/img/theme/light/product-7.png";
import Search from "../../components/Header/Search";
import Top from "../LandingPage/Top";


const Products = () => {

    const products = [
        {name: "Home Base", img: productImg1, id:1},
        {name: "Home Controller", img: productImg2, id:2},
        {name: "Adapt Earphones", img: productImg3, id:3},
        {name: "Smart Pixel 3", img: productImg4, id:4},
        {name: "TV Chromecast", img: productImg5, id:5},
        {name: "Ear Buds", img: productImg6, id:6},
        {name: "Fitness Legging", img: productImg7, id:7},
        {name: "Long sleeved shirt", img: productImg4, id:8}
    ]

    return (
        <div>
            <Header topbar={true} colorVariant={"light"} />
            <Search />
            <div className="main-content">
                <Top />
                <div className="slice slice-lg delimiter-bottom">
                    <div className="container">
                        <div className="row">
                            {
                                products.map(product=> (
                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <ProductCard key={product.id} {...product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products;