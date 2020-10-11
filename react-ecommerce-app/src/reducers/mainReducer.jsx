import React from "react";


export const mainAppContext = React.createContext();

export const initialAppState = {
    isLoading: false,
    isAuthenticated: false,
}


export const mainAppReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "SET_AUTH":
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        default:
            return initialAppState
    }
}