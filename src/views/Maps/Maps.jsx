import React from "react";
import "./maps.css";
import "./maps.less";
class PageEmpty extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="login-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="sr-only">Enregistrement agence</h2>
          <div className="illustration" />

          <div className="form-group">
            <div className="form-input">
              <label>
                <input
                  required
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <span className="placeholder">Text Input</span>
              </label>
            </div>
            <div className="form-input">
              <label>
                <input
                  required
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <span className="placeholder">Text Input</span>
              </label>
            </div>

            {/* <div className="form-group">
            <input
              type="text"
              name="password"
              placeholder="Code agence"
              className="form-control"
            />
          </div> */}
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default PageEmpty;
