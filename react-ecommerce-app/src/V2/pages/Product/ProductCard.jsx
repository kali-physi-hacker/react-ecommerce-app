import React from "react";

const ProductCard = props => {
    return (
        <div className="card card-product">
            <div className="card-image">
                <a href="#">
                    <img alt="Image placeholder" src={props.img}
                         className="img-center img-fluid"/>
                </a>
            </div>
            <div className="card-body text-center pt-0">
                <h6><a href="#">{props.name}</a></h6>
                <p className="text-sm">
                    {props.description}
                </p>
                <span className="card-price">$129 USD</span>
                <div className="product-colors mt-3">
                    <a href="#" style={{backgroundColor: "#59ad46"}} data-toggle="tooltip"
                       data-original-title="Green"></a>
                    <a href="#" style={{backgroundColor: "#04050a"}} data-toggle="tooltip"
                       data-original-title="Black"></a>
                    <a href="#" style={{backgroundColor: "#62aedd"}} data-toggle="tooltip"
                       data-original-title="Blueish"></a>
                    <a href="#" style={{backgroundColor: "#e84385"}} data-toggle="tooltip" data-original-title="Pink"></a>
                </div>
            </div>
            <div className="actions card-product-actions" data-animation-in="slideInLeft"
                 data-animation-out="slideOutLeft">
                <button type="button" className="action-item" data-toggle="tooltip" data-original-title="Add to cart">
                    <i className="far fa-shopping-bag"></i>
                </button>
                <button type="button" className="action-item" data-toggle="tooltip" data-original-title="Wishlist">
                    <i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    )
}


export default ProductCard