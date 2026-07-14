import React, { useState } from 'react';
import './ECC.css';

function ECC() {
    const [activeTab, setActiveTab] = useState('equity');

    return (
        <div className="container mb-2">
            <div className="ecc-tabs mb-4">
                <a
                    href="#"
                    className={`ecc-tab ${activeTab === 'equity' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); setActiveTab('equity'); }}>
                    Equity
                </a>
                 <a href="#"
                    className={`ecc-tab ${activeTab === 'currency' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); setActiveTab('currency'); }}
                >
                    Currency
                </a>
                <a 
                    href="#"
                    className={`ecc-tab ${activeTab === 'commodity' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); setActiveTab('commodity'); }}
                >
                    Commodity
                </a>
            </div>

            <div className="tab-content">
                {activeTab === 'equity' && (
                    <div className="table-responsive">
                        <table className="table table-borderless border text-left">
                            <thead className="border">
                                <tr>
                                    <td style={{ padding: "1rem" }}></td>
                                    <td style={{ padding: "1rem" }}>Equity delivery</td>
                                    <td style={{ padding: "1rem" }}>Equity intraday</td>
                                    <td style={{ padding: "1rem" }}>F&amp;O - Futures</td>
                                    <td style={{ padding: "1rem" }}>F&amp;O - Options</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Brokerage</td>
                                    <td style={{ padding: "0.5rem" }}>Zero Brokerage</td>
                                    <td style={{ padding: "0.5rem" }}>0.03% or ₹20/executed order, whichever is lower</td>
                                    <td style={{ padding: "0.5rem" }}>0.03% or ₹20/executed order, whichever is lower</td>
                                    <td style={{ padding: "0.5rem" }}>Flat ₹20 per executed order</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>STT/CTT</td>
                                    <td style={{ padding: "0.5rem" }}>0.1% on buy & sell</td>
                                    <td style={{ padding: "0.5rem" }}>0.025% on the sell side</td>
                                    <td style={{ padding: "0.5rem" }}>0.05% on the sell side</td>
                                    <td style={{ padding: "0.5rem" }}>
                                        0.15% of the intrinsic value on options that are bought and exercised<br/>
                                        0.15% on sell side (on premium)
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Transaction charges</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.00183%<br/>BSE: 0</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.03553% (on premium)<br/>BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>GST</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>SEBI charges</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Stamp charges</td>
                                    <td style={{ padding: "0.5rem" }}>0.015% or ₹1500 / crore on buy side</td>
                                    <td style={{ padding: "0.5rem" }}>0.003% or ₹300 / crore on buy side</td>
                                    <td style={{ padding: "0.5rem" }}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={{ padding: "0.5rem" }}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'currency' && (
                    <div className="table-responsive">
                        <table className="table table-borderless border text-left">
                            <thead className="border">
                                <tr>
                                    <td style={{ padding: "1rem" }}></td>
                                    <td style={{ padding: "1rem" }}>Currency futures</td>
                                    <td style={{ padding: "1rem" }}>Currency options</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Brokerage</td>
                                    <td style={{ padding: "0.5rem" }}>0.03% or ₹20/executed order, whichever is lower</td>
                                    <td style={{ padding: "0.5rem" }}>₹20/executed order</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>STT/CTT</td>
                                    <td style={{ padding: "0.5rem" }}>No STT</td>
                                    <td style={{ padding: "0.5rem" }}>No STT</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Transaction charges</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.00035%<br/>BSE: 0.00045%</td>
                                    <td style={{ padding: "0.5rem" }}>NSE: 0.0311%<br/>BSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>GST</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>SEBI charges</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Stamp charges</td>
                                    <td style={{ padding: "0.5rem" }}>0.0001% or ₹10 / crore on buy side</td>
                                    <td style={{ padding: "0.5rem" }}>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'commodity' && (
                    <div className="table-responsive">
                        <table className="table table-borderless border text-left">
                            <thead className="border">
                                <tr>
                                    <td style={{ padding: "1rem" }}></td>
                                    <td style={{ padding: "1rem" }}>Commodity futures</td>
                                    <td style={{ padding: "1rem" }}>Commodity options</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Brokerage</td>
                                    <td style={{ padding: "0.5rem" }}>0.03% or ₹20/executed order, whichever is lower</td>
                                    <td style={{ padding: "0.5rem" }}>₹20/executed order</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>STT/CTT</td>
                                    <td style={{ padding: "0.5rem" }}>0.01% on sell side (Non-Agri)</td>
                                    <td style={{ padding: "0.5rem" }}>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Transaction charges</td>
                                    <td style={{ padding: "0.5rem" }}>MCX: 0.0021%<br/>NSE: 0.0001%</td>
                                    <td style={{ padding: "0.5rem" }}>MCX: 0.0418%<br/>NSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>GST</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ padding: "0.5rem" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>SEBI charges</td>
                                    <td style={{ padding: "0.5rem" }}>Agri: ₹1 / crore<br/>Non-agri: ₹10 / crore</td>
                                    <td style={{ padding: "0.5rem" }}>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem", fontWeight: "600" }}>Stamp charges</td>
                                    <td style={{ padding: "0.5rem" }}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={{ padding: "0.5rem" }}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ECC;