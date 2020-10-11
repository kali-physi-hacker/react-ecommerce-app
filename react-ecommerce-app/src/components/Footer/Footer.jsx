import React from 'react';


const Footer = () => {
    return (
        <footer className="section-footer bg-dark white">
            <div className="container">
                <section className="footer-bottom row">
                    <div className="col-sm-6"> 
                        <p> Made with <span className="text-info">React <i className="fas fa-heart text-danger"></i> </span> <br />  by Desmond Brown.</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-sm-right">
                            Copyright &copy; Kali Association of Computer Science 2018 <br />
                            <a href="https://www.github.com/kali-physi-hacker">Meet Me</a>
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    )
}


export default Footer;