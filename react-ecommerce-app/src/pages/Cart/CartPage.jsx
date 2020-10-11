import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Products/Header';
import Cart from './Cart';

import Sidebar from './Sidebar';
import {storeContext} from "../../reducers/storeReducer";
import {accountContext} from "../../reducers/accountReducer";


const CartPage = props => {

    const { type } = useParams();
    const store_context = useContext(storeContext)

    const items = type === "cart" ? store_context.store.cart : type === "wishlist" ? store_context.store.wishList : null;

    // const items = []

    const cart = store_context.store.cart;
    let total = 0;
    cart.map(item=> {
        total += item.price;
    })
    const discount = cart.length * 5
    const grandTotal = total - discount;

    return (
        <div>
            <Header />
            <section className="section-content bg padding-y border-top">
                <div className="container">

                    <div className="row">
                        <main className="col-sm-9">
                            <div className="card">
                                <table className="table table-hover shopping-cart-wrap">
                                    <thead className="text-muted">
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-right" width="200">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.map(item=> (
                                                <Cart   
                                                    cart={item}                                           
                                                />
                                            ))
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </main>
                        <Sidebar
                            totalPrice={total}
                            discountPrice={discount}
                            grandTotalPrice={grandTotal} 
                        />
                    </div>

                </div>
            </section>
        </div>
    )
}


export default CartPage;