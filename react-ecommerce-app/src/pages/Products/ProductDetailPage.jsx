import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import PageTop from './PageTop';
import ProductDetail from './ProductDetail';


const ProductDetailPage = props => {
    const productId = props.match.params.id;
    return (
        <div>
            <Header products={props.products} cart={props.cart} logout={props.logout} setUser={props.setUser} user={props.user} />
            <PageTop />
            <section className="section-content bg padding-y">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductDetail addItemToCartorWishlist={props.addItemToCartorWishlist} id={productId} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default withRouter(ProductDetailPage);