import React from 'react';

import visaImg from '../../../assets/img/icons/cards/visa.png';
import masterCardImg from '../../../assets/img/icons/cards/mastercard.png';
import maestroCardImg from '../../../assets/img/icons/cards/maestro.png';
import paypalCardImg from '../../../assets/img/icons/cards/paypal.png';


const PayInfo = () => {
    return (
        <section className="slice-sm bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="px-4 py-3 text-lg-center">
                            <h6 className="text-sm text-white text-uppercase ls-1">Free shipping in 48/72H</h6>
                            <p className="text-white opacity-7">
                                Shipments are free within Ghana and entirely the whole of Africa.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="px-4 py-3 text-lg-center">
                            <h6 className="text-sm text-white text-uppercase ls-1">Free returns</h6>
                            <p className="text-white opacity-7">
                                We accepts complaints made by our customers and always ready to accept goods that went wrong
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="px-4 py-3 text-lg-center">
                            <h6 className="text-sm text-white text-uppercase ls-1">Secure payment</h6>
                            <ul className="list-inline mt-2">
                                <li className="list-inline-item">
                                    <img alt="Image placeholder" src={visaImg} width="30" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Image placeholder" src={masterCardImg}
                                         width="30" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Image placeholder" src={maestroCardImg}
                                         width="30" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Image placeholder" src={paypalCardImg}
                                         width="30" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PayInfo;