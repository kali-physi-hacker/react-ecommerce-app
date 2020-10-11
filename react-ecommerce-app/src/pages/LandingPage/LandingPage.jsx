import React from 'react';

import Header from '../../components/Header/Header';
import Intro from './Intro';
import Features from './Features';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Footer from '../../components/Footer/Footer';


const LandingPage = props => {
    return (
        <div>
            <Header logout={props.logout} user={props.user} />
            <Intro />
            <Features />
            <FirstSection />
            <SecondSection />
            <Footer />
        </div>
    )
}


export default LandingPage;