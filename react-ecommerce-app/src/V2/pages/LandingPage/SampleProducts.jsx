import React from 'react';

import ProductCard from "../Product/ProductCard";


const SampleProducts = props => {

    return (
        <section className="slice slice-lg delimiter-top" id="sct-products">
            <div className="container">
                <div className="mb-5 text-center">
                    <h3 className="h6">{props.sectionName}<i className="far fa-angle-down text-xs ml-3"></i></h3>
                </div>
                {/* Products */}
                <div className="row">
                    {props.products.map(product=> (
                        <div className={"col-xl-3 col-lg-4 col-sm-6"}>
                            <ProductCard key={product.id} {...product} />
                        </div>
                    ))}
                </div>
                {
                    props.sample ? (
                        <div className="mt-4 text-center">
                            <a href="#"
                               className="btn btn-sm btn-white rounded-pill shadow hover-translate-y-n3">See all products</a>
                        </div>
                    ) : null
                }
            </div>
        </section>
    )
}


export default SampleProducts;