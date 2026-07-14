import React from "react";
import "./Brokerage.css";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="fs-4 mb-4">Charges for account opening</h1>
          <table className="table table-borderless border text-left">
            <thead className="border">
              <tr>
                <td scope="col" style={{ padding: "1rem" }}>Type of account</td>
                <td scope="col" style={{ padding: "1rem" }}>Charges</td>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td style={{ padding: "0.5rem" }}>Individual account</td>
                <td style={{ padding: "0.5rem" }}>Free</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Minor account</td>
                <td style={{ padding: "0.5rem" }}>Free</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>NRI account</td>
                <td style={{ padding: "0.5rem" }}>&#8377; 500</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>HUF account</td>
                <td style={{ padding: "0.5rem" }}>Free (online) / ₹ 500 (offline)</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Partnership, LLP, and Corporate accounts (offline only)</td>
                <td style={{ padding: "0.5rem" }}>&#8377; 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-4 mb-4">Demat AMC (Annual Maintenance Charge)</h1>
          <p className="d-inline-block custom-banner border-start border-4 py-1 ps-3 mb-3">
            Free for first year*
          </p>
          <p className="text-small text-muted" style={{ fontSize: "12px" }}>
            From second year onwards, for BSDA accounts:
          </p>
          <table className="table table-borderless border text-left">
            <thead className="border">
              <tr>
                <td scope="col" style={{ padding: "1rem" }}>Value of holdings</td>
                <td scope="col" style={{ padding: "1rem" }}>AMC</td>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td style={{ padding: "0.5rem" }}>Up to ₹4 lakh</td>
                <td style={{ padding: "0.5rem" }}>Free</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>₹4 lakh - ₹10 lakh</td>
                <td style={{ padding: "0.5rem" }}>₹100 per year + 18% GST, charged quarterly</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Above ₹10 lakhh</td>
                <td style={{ padding: "0.5rem" }}>₹300 per year + 18% GST, charged quarterly</td>
              </tr>
            </tbody>
          </table>
          <p className="text-small text-muted" style={{ fontSize: "12px" }}>
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
          </p>
          <p className="text-small text-muted" style={{ fontSize: "12px" }}>
            To learn more about BSDA, click here. To learn more about AMC, click here.
          </p>
          <p className="text-small text-muted" style={{ fontSize: "12px" }}>
            *Resident individual accounts only.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-4 mb-4">Charges for optional value added services</h1>
          <table className="table table-borderless border text-left">
            <thead className="border">
              <tr>
                <td scope="col" style={{ padding: "1rem" }}>Service</td>
                <td scope="col" style={{ padding: "1rem" }}>Billing Frequency</td>
                <td scope="col" style={{ padding: "1rem" }}>Charges</td>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td style={{ padding: "0.5rem" }}>Tickertape</td>
                <td style={{ padding: "0.5rem" }}>Monthly / Quarterly / Annual</td>
                <td style={{ padding: "0.5rem" }}>Free: 0 | Pro: 249/699/2399</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Smallcase</td>
                <td style={{ padding: "0.5rem" }}>Per transaction</td>
                <td style={{ padding: "0.5rem" }}>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td style={{ padding: "0.5rem" }}>Kite Connect</td>
                <td style={{ padding: "0.5rem" }}>Monthly</td>
                <td style={{ padding: "0.5rem" }}>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;