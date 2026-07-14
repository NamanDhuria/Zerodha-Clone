import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                    <img src="media/image/homeHero.png" alt="Hero Img" className='mb-5' />
                    <h1 className='mt-2'> Invest in Everything </h1>
                    <p>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button style={{ width:'20%', margin:'0 auto' }} className='btn btn-primary p-2'>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;