import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="text-center mt-5 p-5">
        <h1 className="fs-3">Login to your account</h1>
        <h2 className="text-muted fs-5 mt-4">
          Access your investments and continue trading with Zerodha
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="media/image/account_open.svg" alt="" />
          </div>
          <div className="col-6">
            <h3>Login</h3>

            <form onSubmit={handleSubmit} className="mt-4">
              {error && (
                <div className="alert alert-danger py-2">{error}</div>
              )}

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;