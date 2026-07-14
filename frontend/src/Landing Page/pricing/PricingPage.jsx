import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAcc from '../OpenAcc'
import ECC from './ECC'
import Charges from './Charges'


function PricingPage() {
    return ( 
        <>
        <Hero/>
        <ECC/>
        <h2 className='text-center fs-4 mb-5'> <a href="" style={{textDecoration:"none"}}>Calculate your costs upfront </a>using our brokerage calculator</h2>
        <Brokerage/>
        <Charges/>
        </>
     );
}

export default PricingPage;