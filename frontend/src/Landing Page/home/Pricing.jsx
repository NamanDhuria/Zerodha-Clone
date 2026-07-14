import React from 'react';

function Pricinig() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <h1 className='fs-3 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}> 
                        See pricing
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                {/* <div className="col"></div> */}

                <div className="col-6">
                    <div className="row text-start">
    <div className="col-3 d-flex align-items-center">
        <img src="media/image/pricing0.svg" alt="" style={{width: '100px'}} />
        <p className='text-muted small mb-0 mr-3'>Free account opening</p>
    </div>
    <div className="col-6 d-flex align-items-center">
        <img src="media/image/pricingEquity.svg" alt="" style={{width: '100px'}} />
        <p className='text-muted small mb-0 ms-2'>Free equity delivery and direct mutual funds</p>
    </div>
    <div className="col-3 d-flex align-items-center">
        <img src="media/image/intradayTrades.svg" alt="" style={{width: '100px'}} />
        <p className='text-muted small mb-0 ms-2'>Intraday and F&O</p>
    </div>
</div>
                </div>
            </div>
        </div>
     );
}

export default Pricinig;