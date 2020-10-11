import React, {useContext} from 'react';

import Header from './Header';
import PageTop from './PageTop';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Toast from '../../components/Toast';
import {storeContext} from "../../reducers/storeReducer";


const ProductPage = props => {

    const store_context = useContext(storeContext);

    return (
        <div>
            <Header products={props.products} cart={props.cart} logout={props.logout} setUser={props.setUser} user={props.user} />
            <PageTop />
            <section className="section-content bg padding-y" style={{position: "relative"}}>
                { 
                    props.notifyAddToCart ? 
                        <Toast
                        title="Cart"
                        message="Item Added To Cart"
                        type="cart"
                    />
                    : 
                    null 
                }
                {
                    props.notifyAddToWishlist ? 
                    <Toast
                        unSetNotifyAddToCart={props.unSetNotifyAddToCart}
                        title="Cart"
                        message="Item Added To WishList"
                        type="wishlist"
                    />
                    :
                    null
                }
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar setMatchProducts={props.setMatchProducts} setProducts={props.setProducts} />
                        </div>
                        <div className="col-md-9">
                            <ProductList loading={props.loading} setLoading={props.setLoading} addItemToCartorWishlist={props.addItemToCartorWishlist}  />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}


export default ProductPage;