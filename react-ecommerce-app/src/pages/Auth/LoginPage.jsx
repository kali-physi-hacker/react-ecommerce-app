import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { accountContext } from "../../reducers/accountReducer";
import Loader from "../../components/Loader/Loader";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const account_context = useContext(accountContext);

    const validate = user => {
        return user.username !== "" && user.password !== "";
    }

    const login = (e) => {
        e.preventDefault();
        console.log("Logging in")
        const user = {email: username, password: password}
        console.log(validate(user));
        if (validate(user)){
            setLoading(true);
           axios.post("http://localhost:5000/api/auth/login/",user)
               .then(response=> {
                   account_context.dispatchAccount({type: "login", user: response.data})
                   // console.log()
                   account_context.navigate('/')
                   console.log(account_context)
                   setLoading(false);
            })
               .catch(error=> {
                   if (error.response) {
                       setEmailErrorMessage(error.response.data.email);
                       setPasswordErrorMessage(error.response.data.password);
                       console.log(error.response.data)
                   }
                   setLoading(false);
           })
        }
    }

    return (
        <div>
            <div className="container" style={{height: "100vh"}}>
                <div className="row align-items-center" style={{height: "100vh"}}>
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center p-4">
                        {
                            loading ?
                            < Loader /> : (
                                <div className="card shadow">
                                    <article className="card-body">
                                        <Link to="/register" className="float-right btn btn-outline-primary">Sign
                                            up</Link>
                                        <h4 className="card-title mt-1">Sign in</h4>
                                        <p>
                                            <a href="" className="btn btn-block btn-twitter"> <i
                                                className="fab fa-twitter"></i> &nbsp; Login via Twitter</a>
                                            <a href="" className="btn btn-block btn-facebook"> <i
                                                className="fab fa-facebook-f"></i> &nbsp; Login via facebook</a>
                                        </p>
                                        <hr/>
                                        <form onSubmit={login}>
                                            <div className="form-group input-icon">
                                                <i className="fa fa-user"></i>
                                                <input onChange={(e) => setUsername(e.target.value)} value={username}
                                                       name="" className="form-control" placeholder="Email or login"
                                                       type="email"/>
                                                <p className="text-danger text-sm text-left">
                                                    <small>{emailErrorMessage}</small></p>
                                            </div>
                                            <div className="form-group input-icon">
                                                <i className="fa fa-lock"></i>
                                                <input onChange={(e) => setPassword(e.target.value)} value={password}
                                                       className="form-control" placeholder="******" type="password"/>
                                                <p className={"text-danger text-sm text-left"}>
                                                    <small>{passwordErrorMessage}</small></p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <button type="submit"
                                                                className="btn btn-primary btn-block"> Login
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <a className="small" href="#forgot-password">Forgot password?</a>
                                                </div>
                                            </div>
                                        </form>
                                    </article>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;