import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import Some Helper Functions
import { areEmpty } from '../../utils';

import Header from '../../components/Header/Header';
import {accountContext} from "../../reducers/accountReducer";
import Loader from "../../components/Loader/Loader";


const RegisterPage = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [emailErrorMessage, setEmailErrorMessage] = useState("We'll never share your email with anyone else");

    const [loading, setLoading] = useState(false);

    const account_context = useContext(accountContext);

    const valid = (userData) => {
        return !areEmpty(userData) && userData.password === passwordConfirm;
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
            setLoading(true);
            axios.post('http://localhost:5000/api/auth/signup', userData)
                .then(response=> {
                    if (response.status === 201) {
                        console.log(response);
                        account_context.navigate("/register-success");
                    }
                    setLoading(false);
                }).catch(error=> {
                    if (error.response) {
                        console.log(error.response.data);
                        setEmailErrorMessage(error.response.data.email);
                    }
                    setLoading(false);
            })
        } else {
            console.log(valid(userData))
        }
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row align-items-center" style={{height: "100vh"}}>
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center p-4">
                        {
                            loading ? <Loader/>
                            : (
                                <div className="card">
                                <header className="card-header">
                                    <Link to="/login" className="float-right btn btn-outline-primary mt-1">Log in</Link>
                                    <h4 className="card-title mt-2">Sign up</h4>
                                </header>
                                <article className="card-body">
                                <form onSubmit={registerUser}>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name</label>
                                            <input onChange={(e)=> setFirstName(e.target.value)} type="text" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input onChange={(e)=> setLastName(e.target.value)} type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" placeholder="" />
                                        <small className="form-text text-muted">{emailErrorMessage}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input onChange={(e)=> setPassword(e.target.value)} className="form-control" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input onChange={(e=> setPasswordConfirm(e.target.value))} className={"form-control"} type={"password"}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                                    </div>
                                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                                </form>
                                </article>
                                <div className="border-top card-body text-center">Have an account? <Link to="/login">Log In</Link></div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
        
    )
}


export default RegisterPage;