import React, { useEffect, useContext } from 'react';

// Import Some Helper Functions

import ProductItem from './ProductItem';
import Loader from "../../components/Loader/Loader";
import { storeContext} from "../../reducers/storeReducer";


const ProductList = props => {


    const store_context = useContext(storeContext);

    useEffect(() => {
        console.log("Product Length:",store_context.store.products.length)
        props.setLoading(true);
        store_context.store.products.length <= 0 ?
            fetch('https://fakestoreapi.com/products/')
            .then(res=>{
                res.json()
                    .then(data=>{
                            store_context.dispatchStore({type: "FETCH_PRODUCTS", payload: data})
                            props.setLoading(false);
                        }
                )}
            )
        :
        console.log("Done")
    }, []);


    return (
        <div className={"text-center"}>
            {
                props.loading ? <Loader/> :
                    (
                        store_context.store.matchProducts.length > 0 ?
                        store_context.store.matchProducts.map(product=> (
                        <ProductItem key={product.id}
                        price={product.price}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        id={product.id}
                        addItemToCartorWishlist={props.addItemToCartorWishlist}
                        />
                        )):
                        store_context.store.products.length > 0 ?
                        store_context.store.products.map(product=> (
                        <ProductItem key={product.id}
                        price={product.price}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        id={product.id}
                        addItemToCartorWishlist={props.addItemToCartorWishlist}
                        />
                        ))
                        : <p>No Products Available</p>
                )
            }
        </div>
    )
}


export default ProductList;