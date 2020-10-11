import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';


import './assets/libs/animate.css/animate.min.css';
import './assets/libs/swiper/dist/css/swiper.min.css';
import './assets/css/purpose.css';
import {Route, useHistory} from "react-router-dom";

import LandingPage from "./V2/pages/LandingPage/LandingPage"
import Login from './V2/pages/Auth/Login';

import {initialAppState, mainAppContext, mainAppReducer} from "./reducers/mainReducer";
import {initialAccounts, accountReducer, accountContext} from "./reducers/accountReducer";

import {getAuthToken} from "./utils";

import BottomModal from "./V2/components/BottomModal";
import Signup from "./V2/pages/Auth/Signup";
import Products from "./V2/pages/Product/Products";


const App = () => {
    const [mainAppState, dispatchMainAppState] = useReducer(mainAppReducer, initialAppState);
    const [authState, dispatchAuthState] = useReducer(accountReducer, initialAccounts);

    const history = useHistory() ;
    const navigate = route => {
        history.push(route);
    }


    useEffect(() => {
        if (getAuthToken() !== null) {
            const token = `Token ${getAuthToken()}`;
            axios.post('http://localhost:5000/api/auth/get-user', {}, {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    dispatchAuthState({
                        type: "SET_USER",
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email
                    })
                    dispatchMainAppState({type: "SET_AUTH", isAuthenticated: true})
                })
                .catch(error=> console.log(error))
        }
    }, [])

    return (
        <div>
            <mainAppContext.Provider value={{
                appState: mainAppState,
                dispatchMainAppState: dispatchMainAppState,
                authState: authState,
                dispatchAuthState: dispatchAuthState,
                navigate: navigate
            }}>
                <Route exact path={"/"} render={() => <LandingPage/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/signup"} render={() => <Signup/>}/>
                <Route path={"/products"} render={() => <Products/>}/>
            </mainAppContext.Provider>
            <BottomModal/>
        </div>
    )
}


export default App;