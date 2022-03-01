import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
    };
  }
  handleUserChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };
  handlePasswordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  login = () => {
    const { name, password } = this.state;
    if (name == "admin" && password == "admin") {
      console.log("Logged in");
    }
  };
  render() {
    return (
      <div classname="Container mt-5">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header text-white">
                <h2>login Form</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  User Name:{" "}
                  <input
                    onChange={this.handleUserChange}
                    type="text"
                    placeholder="Enter the username"
                    className="form-control"
                  />
                  Password:
                  <input
                    onChange={this.handlePasswordChange}
                    type="password"
                    placeholder="Enter the password"
                    className="form-control"
                  />
                </div>
                <button
                  className="btn btn-primary px-5 mt-2"
                  onClick={this.login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="cols-sm-4"></div>
        </div>
      </div>
    );
  }
}
export default Login;
