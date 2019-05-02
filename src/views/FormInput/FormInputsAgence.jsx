import React from "react";
import "./formInputs.css";

class FormInputsAgence extends React.Component {
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
            <input
              type="email"
              name="email"
              placeholder="Libellé Agence"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              name="password"
              placeholder="Code agence"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Enregistrer
            </button>
            <button className="btn btn-primary btn-block" type="cancel">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default FormInputsAgence;
