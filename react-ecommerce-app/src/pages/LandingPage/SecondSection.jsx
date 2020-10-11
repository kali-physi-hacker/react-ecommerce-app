import React from 'react';

import Section from './Section2Item';


const SecondSection = () => {
    return (
        <section id="more" className="bg section-content padding-y-lg">
            <div className="container">
                <header className="section-heading text-center">
                    <h2 className="title-section"> We Update You</h2>
                    <p className="lead"> We care about satisfying your needs with the latest products and news </p>
                </header>

                <div className="row justify-content-center">
                <Section 
                    title={'Emails and Notifications'}
                    icon={'fa-envelope'}
                    description={
                        'You receive regular news and updates in your email notifying of new products based on your search histories and other Intelligent Variance from your system.'
                    }
                />
                <Section 
                    title={'Search Similar Products'}
                    icon={'fa-search'}
                    description={
                        'When you perform any search, a track is created on your behind and our system intelligently and cognitively pulls out similar items that are relevant to your search.'
                    }
                />
                <Section 
                    title={'Your shopping is organized'}
                    icon={'fa-file'}
                    description={
                        'Your data is not thrown away, your search history, your purchases and ultimately any action you perform on our system is kept and organized for your later analyses and visualization. '
                    }
                />
                </div>

            </div>
        </section>
    )
}


export default SecondSection;