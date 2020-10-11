import React from 'react';
import { Link } from 'react-router-dom';

// Computer Image Import 
import computerImage from '../../static/images/items/bag.png';


const Intro = () => {
    return (
        <section id="intro" className="section-intro bg-secondary pt-5">
            <div className="container">
                <div className="row d-flex" style={{minHeight:600}}>
                    <div className="col-sm-6 d-flex align-items-center">
                        <header className="intro-wrap text-white">
                            <h2 className="display-3"> Amazing place for shopping online </h2>
                            <p className="lead">
                                Online shopping is becoming more popular and easier to find. <br />
                                It is now your duty find a trusted shop with the best, quality and affordable products
                                that suites your needs
                            </p>
                            
                            <Link to="/products" className="btn btn-warning mr-2">Explore Marketplace</Link>
                            <a href="#learn-more" className="btn btn-light">Learn more</a>
                        </header>
                    </div>
                    <div className="col-sm-6 text-right">
                        <img src={computerImage} alt="" className="img-fluid my-5" width="500" />	
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Intro;