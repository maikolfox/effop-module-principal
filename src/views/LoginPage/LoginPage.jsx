import React from "react";
import "./login.css";
import auth from "../../authentification/auth.jsx";
import TauxActiviteMensuel from "views/TauxActiviteMensuel/TauxActiviteMensuel.jsx";

import { BrowserRouter } from "react-router-dom";

import indexRoutes from "routes/index.jsx";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

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
    const datas = new FormData(event.target);
    let dataJson = {
      data: {
        email: datas.get("email"),
        password: datas.get("password")
      }
    };
    const myObjStr = JSON.stringify(dataJson);

    console.log(myObjStr);
    this.setState({
      res: myObjStr //stringifyFormData(datas)
    });

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
    const hist = createBrowserHistory();

    console.log(dataJson);
    localStorage.setItem("isNotAdmin", "false");
    console.log(localStorage.getItem("isNotAdmin"));
  }
  render() {
    return (
      <div className="login-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="sr-only">EFFOP</h2>
          <h4 className="sr-only">
            Connexion à l'outils de mesure de l'éfficacité opérationnelle
          </h4>
          <div className="illustration" />

          <div className="form-group">
            <div className="form-input">
              <label>
                <input
                  required
                  type="text"
                  name="email"
                  // value={this.state.value}
                  // onChange={this.handleChange}
                />
                <span className="placeholder">Email</span>
              </label>
            </div>
            <div className="form-input">
              <label>
                <input
                  required
                  type="password"
                  name="password"
                  // value={this.state.value}
                  // onChange={this.handleChange}
                />
                <span className="placeholder">Password</span>
              </label>
              <br />
              <span>mot de pass ou email incorrect</span>
            </div>
            {this.state.res && (
              <div className="res-block">
                <h3>Data to be sent:</h3>
                <pre>{this.state.res}</pre>
              </div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Connexion
            </button>

            <button
              id="cancel"
              className="btn btn-primary btn-block"
              type="reset"
            >
              Annuler
            </button>
          </div>
          <br />
          <a href="#">mot de passe oublié</a>
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
