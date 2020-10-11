import React from 'react';


const Cart = props => {

    const productImg = `${props.cart.image}`
    console.log("Cart: ", props.cart)
    console.log("Product Image: ", props.cart.image);
    return (
        <tr>
            <td>
                <figure className="media">
                    <div className="img-wrap"><img src={productImg} className="img-thumbnail img-sm" alt="Product" /></div>
                    <figcaption className="media-body">
                        <h6 className="title text-truncate"> {props.cart.title} </h6>
                        <dl className="dlist-inline small">
                            <dt>Size: </dt>
                            <dd>XXL</dd>
                        </dl>
                        <dl className="dlist-inline small">
                            <dt>Color: </dt>
                            <dd>Orange color</dd>
                        </dl>
                    </figcaption>
                </figure> 
            </td>
            <td> 
                <select className="form-control">
                    <option>1</option>
                    <option>2</option>	
                    <option>3</option>	
                    <option>4</option>	
                </select> 
            </td>
            <td> 
                <div className="price-wrap"> 
                    <var className="price">USD {props.cart.price}</var> 
                    <small className="text-muted">(USD5 each)</small> 
                </div>
            </td>
            <td className="text-left"> 
                <a data-original-title="Save to Wishlist" title="" href="#wishlist" className="btn btn-outline-success mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                <a href="#remove" className="btn btn-outline-danger"> × Remove</a>
            </td>
        </tr>
    )
}


export default Cart;