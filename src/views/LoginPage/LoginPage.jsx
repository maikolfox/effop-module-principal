import React from "react";
import "./login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    this.setState({
      res: stringifyFormData(data)
    });
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
    console.log(this.state.res);
  }

  render() {
    return (
      <div className="login-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="sr-only">
            Connexion à l'outils de mesuer de l'efficacité opérationnelle
          </h2>
          <div className="illustration" />
          <div className="form-group">
            <div className="form-input">
              <label>
                <input
                  required
                  type="text"
                  name="input1"
                  // value={this.state.value}
                  // onChange={this.handleChange}
                />
                <span className="placeholder">Text Input</span>
              </label>
            </div>
            <div className="form-input">
              <label>
                <input
                  required
                  type="password"
                  name="input2"
                  // value={this.state.value}
                  // onChange={this.handleChange}
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
            {this.state.res && (
              <div className="res-block">
                <h3>Data to be sent:</h3>
                <pre>{this.state.res}</pre>
              </div>
            )}
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
function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}
export default LoginPage;
