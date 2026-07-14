import React from 'react';

function SupportAccordion() {
    return ( 
        <div className="container mt-4">
            <div className="row">
                {/* Left side - Accordion */}
                <div className="col-8">
                    <div className="accordion" id="supportAccordion">

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <i className="fa-solid fa-circle-plus text-primary me-3"></i>
                                    Account Opening
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#supportAccordion"
                            >
                                <div className="accordion-body">
                                    <ul>
                                        <li><a href="#" className="text-decoration-none">Resident individual</a></li>
                                        <li><a href="#" className="text-decoration-none">Minor</a></li>
                                        <li><a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
                                        <li><a href="#" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
                                        <li><a href="#" className="text-decoration-none">Glossary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <i className="fa-regular fa-circle-user text-primary me-3"></i>
                                    Your Zerodha Account
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#supportAccordion"
                            >
                                <div className="accordion-body">
                                     <ul>
                                        <li><a href="#" className="text-decoration-none">Your Profile</a></li>
                                        <li><a href="#" className="text-decoration-none">Account Modification</a></li>
                                        <li><a href="#" className="text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                        <li><a href="#" className="text-decoration-none">Nomination</a></li>
                                        <li><a href="#" className="text-decoration-none">Transfer and conversion of securities</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-4">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <i className="fa-solid fa-angles-left text-primary me-3"></i>
                                    Kite
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#supportAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="accordion-body">
                                     <ul>
                                        <li><a href="#" className="text-decoration-none">IPO</a></li>
                                        <li><a href="#" className="text-decoration-none">Trading FAQs</a></li>
                                        <li><a href="#" className="text-decoration-none">Margin Trading Facility (MTF) and Margins</a></li>
                                        <li><a href="#" className="text-decoration-none">Charts and orders</a></li>
                                        <li><a href="#" className="text-decoration-none">Alerts and Nudges</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-4">
                    <div className="border-start border-4 border-warning bg-warning-subtle p-3 mb-3">
                        <ul className="mb-0 ps-3">
                            <li><a href="#" className="text-decoration-underline">Offer for sale (OFS) – July 2026</a></li>
                            <li><a href="#" className="text-decoration-underline">Latest Intraday leverages and Square-off timings</a></li>
                        </ul>
                    </div>

                    <div className="border">
                        <div className="bg-light p-3 fw-semibold">
                            Quick links
                        </div>
                        <ul className="list-unstyled mb-0">
                            <li className="p-3 border-bottom"><a href="#" className="text-decoration-none">1. Track account opening</a></li>
                            <li className="p-3 border-bottom"><a href="#" className="text-decoration-none">2. Track segment activation</a></li>
                            <li className="p-3 border-bottom"><a href="#" className="text-decoration-none">3. Intraday margins</a></li>
                            <li className="p-3 border-bottom"><a href="#" className="text-decoration-none">4. Kite user manual</a></li>
                            <li className="p-3"><a href="#" className="text-decoration-none">5. Learn how to create a ticket</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default SupportAccordion;