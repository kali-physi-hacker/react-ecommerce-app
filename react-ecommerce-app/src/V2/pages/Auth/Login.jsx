import React, {useContext, useState} from "react";
import Auth from "./Auth";

import Loader from "../../components/Loader";
import {mainAppContext} from "../../../reducers/mainReducer";
import axios from "axios";
import {accountContext} from "../../../reducers/accountReducer";


const LoginForm = () => {

    const main_app_context = useContext(mainAppContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const account_context = useContext(accountContext);

    const validate = user => {
        return user.username !== "" && user.password !== "";
    }

    const login = (e) => {
        e.preventDefault()
        const user = {email: email, password: password}
        if (validate(user)) {
            console.log("Validated")
            main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: true})
            setError("");
            axios.post("http://localhost:5000/api/auth/login/", user)
                .then(response => {
                    account_context.dispatchAccount({type: "login", user: response.data})
                    localStorage.setItem("auth_token", response.data.token);
                    account_context.navigate('/')
                    console.log(account_context)
                    main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: false})
                })
                .catch(error => {
                    if (error.response) {
                        setEmailErrorMessage(error.response.data.email);
                        setPasswordErrorMessage(error.response.data.password);
                        console.log(error.response.data)
                    }
                    main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: false})
                })
        } else if (!validate(user)) {
            setError("All Fields are required");
        } else {
            console.log("No internet connection");
        }
    }

    return (
        <form onSubmit={login} role="form">
            <div className="form-group">
                <label className="form-control-label">Email address</label>
                <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i
                            className="far fa-user"></i></span>
                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"
                           value={email} placeholder="email@example.com"/>
                </div>
                <p className="text-danger">{emailErrorMessage}</p>
            </div>
            <div className="form-group mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <label className="form-control-label">Password</label>
                    </div>
                    <div className="mb-2">
                        <a href="#!"
                           className="small text-muted text-underline--dashed border-primary">Lost
                            password?</a>
                    </div>
                </div>
                <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="far fa-key"></i></span>
                    </div>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"
                           value={password} placeholder="Password"/>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="far fa-eye text-dark"></i>
                      </span>
                    </div>
                </div>
                <p className="text-danger">{passwordErrorMessage}</p>
            </div>
            <p className="text-danger">{error}</p>
            <div className="mt-4">
                {
                    main_app_context.appState.isLoading ? <Loader/> :
                        (
                            <button type="submit"
                                    className="btn btn-sm btn-primary btn-icon rounded-pill">
                                <span className="btn-inner--text">Sign in</span>
                                <span className="btn-inner--icon"><i className="far fa-long-arrow-alt-right"></i></span>
                            </button>
                        )
                }
            </div>
        </form>
    )
}

const Login = () => {

    return (
        <Auth title={'Login'} subTitle={'Sign in to your account to continue'}
              footerText={'Not Registered'} footerLink={'/signup'} footerActionText={'Create Account'}>
            <LoginForm/>
        </Auth>
    )
}


export default Login;