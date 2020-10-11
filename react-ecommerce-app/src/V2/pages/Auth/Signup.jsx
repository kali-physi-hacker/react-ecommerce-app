import React, {useContext, useState} from "react";
import Auth from "./Auth";
import axios from "axios";
import {areEmpty} from "../../../utils";
import {mainAppContext} from "../../../reducers/mainReducer";



const SignupForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


    const main_app_context = useContext(mainAppContext);


    const valid = (userData) => {
        return !areEmpty(userData) && userData.password === confirmPassword;
    }

    const registerUser = (e) => {
        e.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        if (valid(userData)) {
            main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: true});
            axios.post('http://localhost:5000/api/auth/signup', userData)
                .then(response=> {
                    if (response.status === 201) {
                        console.log(response);
                        // account_context.navigate("/register-success");
                    }
                    main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: false});
                }).catch(error=> {
                    if (error.response) {
                        console.log(error.response.data);
                        setEmailErrorMessage(error.response.data.email);
                    }
                    main_app_context.dispatchMainAppState({type: "SET_LOADING", isLoading: false});
            })
        } else {
            console.log(valid(userData))
        }
    }


    return (
        <form role="form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-control-label">First Name</label>
                        <input onChange={(e)=> setFirstName(e.target.value)} type="email" className="form-control"
                               value={firstName} placeholder="John"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-control-label">First Name</label>
                        <input onChange={(e)=> setLastName(e.target.value)} type="email" className="form-control"
                               value={lastName} placeholder="Doe"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Email address</label>
                <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="far fa-user"></i></span>
                    </div>
                    <input type="email" className="form-control"  onChange={(e)=> setEmail(e.target.value)}
                           value={email} placeholder="email@example.com" />
                </div>
            </div>
            <div className="form-group mb-4">
                <label className="form-control-label">Password</label>
                <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="far fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value)}
                           value={password} placeholder="password" />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="far fa-eye"></i>
                          </span>
                        </div>
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Confirm password</label>
                <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="far fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)}
                           value={confirmPassword} placeholder="Password" />
                </div>
            </div>
            <div className="my-4">
                <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="check-terms" />
                        <label className="custom-control-label" htmlFor="check-terms">I agree to the <a href="#">terms
                            and conditions</a></label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="check-privacy" />
                        <label className="custom-control-label" htmlFor="check-privacy">I agree to the <a href="#">privacy
                            policy</a></label>
                </div>
            </div>
            <div className="mt-4">
                <button type="button" className="btn btn-sm btn-primary btn-icon rounded-pill">
                    <span className="btn-inner--text">Create my account</span>
                    <span className="btn-inner--icon"><i className="far fa-long-arrow-alt-right"></i></span>
                </button>
            </div>
        </form>
    )
}


const Signup = () => {
    return (
        <Auth title={'Signup'} subTitle={'Create your free account today'} footerText={'Already have an account?'} footerLink={'/login'} footerActionText={'Sign in'}>
            <SignupForm />
        </Auth>
    )
}


export default Signup;