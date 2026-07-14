import React from "react";

function RightImg({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-5 p-5 mt-5">
          <h1 className="mb-4 fs-4 text-muted">{productName}</h1>
          <p style={{ lineHeight: "1.8" }}>{productDesc}</p>
          <a
            href={learnMore}
            style={{ textDecoration: "none"}}>
            Learn More →
          </a>
        </div>
          <div className="col-6">
            <div >
              <img src={imageURL} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default RightImg;
