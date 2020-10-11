import React from 'react';
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer';
import PayInfo from '../../components/Footer/PayInfo';

import Top from "./Top";
import CommonProducts from "./CommonProducts";
import SampleProducts from "./SampleProducts";
import StartShopping from "./StartShopping";
import Subscribe from "./Subscribe";
import Search from '../../components/Header/Search';

import productImg1 from "../../../assets/img/theme/light/product-1.png";
import productImg2 from "../../../assets/img/theme/light/product-2.png";
import productImg3 from "../../../assets/img/theme/light/product-3.png";
import productImg4 from "../../../assets/img/theme/light/product-4.png";
import productImg5 from "../../../assets/img/theme/light/product-5.png";
import productImg6 from "../../../assets/img/theme/light/product-6.png";
import productImg7 from "../../../assets/img/theme/light/product-7.png";


const LandingPage = () => {

    const sampleProducts = [
        {name: "Home Base", img: productImg1, id:1},
        {name: "Home Controller", img: productImg2, id:2},
        {name: "Adapt Earphones", img: productImg3, id:3},
        {name: "Smart Pixel 3", img: productImg4, id:4},
        {name: "TV Chromecast", img: productImg5, id:5},
        {name: "Ear Buds", img: productImg6, id:6},
        {name: "Fitness Legging", img: productImg7, id:7},
        {name: "Long sleeved shirt", img: productImg4, id:8}
    ]

    const recentSeenProducts = [
        {name: "Home Base", img: productImg1, id:1},
        {name: "Home Controller", img: productImg2, id:2},
        {name: "Adapt Earphones", img: productImg3, id:3},
        {name: "Smart Pixel 3", img: productImg4, id:4},
    ]

    return (
        <div>
            <Header topbar={true} colorVariant={'dark'} />
            <Search />
            <div className={"main-content"}>
                <Top />
                <CommonProducts />
                <SampleProducts sample={true} sectionName={"Latest products"} products={sampleProducts} />
                <StartShopping />
                {/* Recently Seen Products */}
                <SampleProducts sectionName={"Recently Seen"} products={recentSeenProducts} />
                <Subscribe />
                <PayInfo />
                <Footer />
            </div>
            {/*<BottomModal />*/}
        </div>
    )
}


export default LandingPage