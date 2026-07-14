import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }} className="py-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="">Support Portal</h1>
                    <button className="btn btn-primary">My tickets</button>
                </div>

                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <i className="fa-solid fa-magnifying-glass text-muted"></i>
                    </span>
                    <input 
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                        style={{height:"60px"}}
                    />
                </div>
            </div>
        </div>
  );
}

export default Hero;
