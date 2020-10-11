import React from 'react';

import masterCardIcon from '../../static/images/icons/pay-mastercard.png';
import visaCartIcon from '../../static/images/icons/pay-visa.png';


const Sidebar = props => {
    return (
        <aside className="col-sm-3">
            <p className="alert alert-success">Add USD 5.00 of eligible items to your order to qualify for FREE Shipping. </p>
            <dl className="dlist-align">
                <dt>Total price: </dt>
                <dd className="text-right">USD {props.totalPrice}</dd>
            </dl>
            <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-right">USD {props.discountPrice}</dd>
            </dl>
            <dl className="dlist-align h4">
                <dt>Total:</dt>
                <dd className="text-right"><strong>USD {props.grandTotalPrice} </strong></dd>
            </dl>
            <hr />
            <figure className="itemside mb-3">
                <aside className="aside"><img src={visaCartIcon} alt="Visa" /></aside>
                <div className="text-wrap small text-muted">
                    Pay 84.78 AED ( Save 14.97 AED )
                    By using ADCB Cards 
                </div>
            </figure>
            <figure className="itemside mb-3">
                <aside className="aside"> <img src={masterCardIcon} alt="MasterCard" /> </aside>
                <div className="text-wrap small text-muted">
                    Pay by MasterCard and Save 40%. <br />
                    Lorem ipsum dolor 
                </div>
            </figure>

        </aside>
    )
}


export default Sidebar;