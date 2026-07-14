import React from "react";

function LeftImg({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {

  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 ">
          <h1 className="mb-4 fs-4 text-muted">{productName}</h1>
          <p style={{lineHeight:"1.8"}}>{productDesc}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
            <a href={learnMore} style={{textDecoration:"none", marginLeft: "50px"}}>
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/image/googlePlayBadge.svg"/>
            </a>
            <a href={appStore}>
              <img
                src="media/image/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;