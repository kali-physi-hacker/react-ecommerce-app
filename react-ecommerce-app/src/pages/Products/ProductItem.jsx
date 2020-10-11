import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Toast from '../../components/Toast';
import {storeContext} from "../../reducers/storeReducer";
import {accountContext} from "../../reducers/accountReducer";


const ProductItem = props => {
	const productUrl = `/products/${props.id}`;

	const store_context = useContext(storeContext);
	const account_context = useContext(accountContext);

	const addToBasket = (id, type) => {

		if (account_context.accounts.currentUser !== null){
			const basketType = type === "cart" ? "ADD_TO_CART": type === "wishlist" ? "ADD_TO_WISHLIST": null;
			const product = store_context.store.products.find(product=> product.id === id);
			store_context.dispatchStore({type: basketType, product: product });
		}else {
			account_context.navigate('/login');
		}
	}

    return (
        <article className="card card-product">
			<div className="card-body">
			<div className="row">
				<aside className="col-sm-3">
					<div className="img-wrap"><img src={ props.image } /></div>
				</aside>
				<article className="col-sm-6">
						<h4 className="title"> {props.title}  </h4>
						<div className="rating-wrap  mb-2">
							<ul className="rating-stars">
								<li style={{width: "80%"}} className="stars-active"> 
									<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
									<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
									<i className="fa fa-star"></i> 
								</li>
								<li>
									<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
									<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
									<i className="fa fa-star"></i> 
								</li>
							</ul>
							<div className="label-rating">132 reviews</div>
							<div className="label-rating">154 orders </div>
						</div>
						<p> 
                            {props.description}
                        </p>
						<dl className="dlist-align">
						<dt>Color</dt>
						<dd>{ props.color }</dd>
						</dl> 
						<dl className="dlist-align">
						<dt>Material</dt>
						<dd>{ props.material }</dd>
						</dl> 
						<dl className="dlist-align">
						<dt>Delivery</dt>
						<dd>{ props.delivery }</dd>
						</dl> 
					
				</article>
				<aside className="col-sm-3 border-left">
					<div className="action-wrap">
						<div className="price-wrap h4">
							<span className="price"> ${props.price} </span>	
							<del className="price-old"> {props.old_price ? `$props.old_price` : null}</del>
						</div>
						<p className="text-success">Free shipping</p>
						<br />
						<p>
							<a href="#buy-now" className="btn btn-primary mr-2"> Buy now </a>
							<Link to={productUrl} className="btn btn-secondary"> Details </Link>
						</p>
						<a onClick={()=> addToBasket(props.id, "wishlist")} className="d-block" href="#add-to-wishlist">
							<i className="fa fa-heart"></i> Add to wishlist
						</a>
						<a onClick={()=> addToBasket(props.id, "cart")} href="#add-to-cart" className="text-info">
							<i className="fas fa-shopping-cart"></i> Add to Cart
						</a>
					</div>
				</aside>
			</div>
			</div>
		</article> 
    )
}


export default ProductItem;