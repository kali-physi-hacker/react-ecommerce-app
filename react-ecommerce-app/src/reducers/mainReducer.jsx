import React from "react";


export const mainAppContext = React.createContext();

export const initialAppState = {
    isLoading: false
}


export const mainAppReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            console.log("Loading...")
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return initialAppState
    }
}