import React from 'react';


export const accountContext = React.createContext();

export const initialAccounts = {
    firstName: "",
    lastName: "",
    email: ""
}


export const accountReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email
            }
        case "SET_FIRST_NAME":
           return {
               ...state,
               firstName: action.firstName
           }
        case "SET_LAST_NAME":
            return {
                ...state,
                lastName: action.lastName
            }
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            }
        default:
            return initialAccounts;
    }
}