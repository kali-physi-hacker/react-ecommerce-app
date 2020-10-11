import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { storeContext } from "../reducers/storeReducer";


const CartIcon = props => {

    // const store_context = useContext(storeContext);
    // console.log(store_context)

    return (
        <div className="icontext mb-4 pr-3 mr-3" style={{borderRight: "3px solid #20c997"}}>
            <Link to="/cart/cart" className="icon-wrap icon-xs bg-secondary round text-light">
                <i className="fa fa-shopping-cart"></i>
                <span className="notify bg-warning">{props.cartLength}</span>
            </Link>
            <div className="text-wrap">
                <div className="text-dark font-weight-bold">My Cart</div>
            </div>
        </div>
    )
}


export default CartIcon;