import React from 'react';
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';


const SuccessPage = () => {
    const iconContainerStyles = {
        display: "flex",
        width: 200,
        height: 200,
        borderRadius: "50%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div>
            <Header />
            <div className="container" style={{height: "100vh"}}>
                <div className="row align-items-center" style={{height: "100vh"}}>
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center p-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h4>Registration Status</h4>

                                <hr />
                                <div style={iconContainerStyles} className={"bg-dark"}>
                                    <i style={{fontSize: 98}} className={"fa-5x fas fa-check text-light"}></i>
                                </div>
                                <p style={{fontSize: 24}} className={"mt-5"}>Registration Successful</p>
                                <Link to={"/login"} style={{fontSize: 18, fontWeight: "bold"}} className={"btn btn-info btn-block"}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SuccessPage;