import React from "react";
import "./maps.css";

class PageEmpty extends React.Component {
  render() {
    return (
      <div className="login-clean">
        <form method="post">
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration" />
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
          <a href="#" className="forgot">
            Forgot your email or password?
          </a>
        </form>
      </div>
    );
  }
}
export default PageEmpty;
