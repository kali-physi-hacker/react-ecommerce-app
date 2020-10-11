import React from 'react';

import SectionItem from './SectionItem';


const Section = props => {
    return (
        <section id="content" className="section-content padding-y-lg">
            <div className="container">

                <header className="section-heading text-center">
                    <h2 className="title-section">Essence Of Choosing Us</h2>
                    <p className="lead"> 
                        While generating income for us, you do yourself good with following
                    </p>
                </header>

                <div className="row justify-content-center">
                    <SectionItem
                        iconClassName={'fa fa-user white'}
                        iconBackground={'bg-success'}
                        title={'Creative Strategy & solution'}
                        description={'This is the best of creative solution. As with our system, common cybercrimes such as credit card frauds and account hijacking is impossible'}
                    />
                    <SectionItem
                        iconClassName={'fa fa-certificate white'}
                        iconBackground={'bg-warning'}
                        title={'Double Q'}
                        description={'With KaliCommerce, you don\'t trade of quality for quantity or vice verser hence Double Q. We make sure we get you the most quality products at affordable price.'}
                    />
                    <SectionItem
                        iconClassName={'fa fa-user white'}
                        iconBackground={'bg-primary'}
                        title={'Don\'t Wait Too Long'}
                        description={'We believe time is pretty much everything, We don\'t want you to wait too long for your products, Hence, the optimized and minized product delivery time.'}
                    />
                </div> 
            </div>
        </section>  
    )
}


export default Section;