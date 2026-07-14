import React from 'react';
import Hero from './Hero';
import Pricinig from './Pricing';
import Stats from './Stats';
import Education from './Education';

import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stats/> 
        <Pricinig/> 
        <Education/> 
        <OpenAcc/> 
        </>
     );
}

export default HomePage;