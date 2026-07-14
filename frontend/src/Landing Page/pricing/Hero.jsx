import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center p-4 mt-3">
                <h1 className='fs-3 mt-5'>Charges</h1>
                <p className='text-muted fs-5'>List of all charges and taxes</p>
            </div>
            <div className="row p-4 mt-3 text-center">
                <div className="col p-5">
                    <img src="media/image/pricing0.svg" alt="" />
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='mt-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-5">
                    <img src="media\image\intradayTrades.svg" alt="" />
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='mt-3 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-5">
                    <img src="media/image/pricing0.svg" alt="" />
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='mt-3 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
