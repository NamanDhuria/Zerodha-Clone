import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top mb-5 ">
        <h1 className="mt-5 text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="media/image/photo.png"
            alt=""
            style={{
              border: "solid black 1px",
              borderRadius: "100%",
              width: "17rem",
              height: "18rem",
            }}
          />
          <h4 className="mt-5">Naman Dhuria</h4>
          <h6>Engineer</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Naman bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="fs-6">
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage{" "} 
            </a>
             /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>
             /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
