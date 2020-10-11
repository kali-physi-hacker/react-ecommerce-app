import React from "react";
import {getCategories, mapCategoriesCount} from "../utils";


export const storeContext = React.createContext();

export const initialStore = {
    products: [],
    categories: [],
    cart: [],
    wishList: [],
    matchProducts: []
}


export const storeReducer = (state, action) => {
    switch (action.type){
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                categories: mapCategoriesCount(getCategories(action.payload))
            }
        case "MATCH_PRODUCTS_CATEGORIES":
            return {
                ...state,
                matchProducts: action.matchProducts
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.product]
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishList: [...state.wishList, action.product]
            }
        default:
            return initialStore;
    }
}