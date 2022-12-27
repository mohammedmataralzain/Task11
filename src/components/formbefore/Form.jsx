import React, { Component } from "react";
import icon from "../img/flat-color-icons_google.jpg";
import "../left/left.css";
const defaults = {
  email: "",
  password: "",
  repeatPassword: "",
  checked: "",
};
export default class Form extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    checked: "",
  };

  handelInput = (e) => {
    const { value, id } = e.target;

    this.setState({ [id]: value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ ...defaults }));
  };
  render() {
    return (
      <form className="form" onSubmit={(e) => this.handelSubmit(e)}>
        <label>Email address*</label>
        <input
          id="email"
          placeholder="Enter email address"
          name="email"
          type="email"
          onChange={(e) => this.handelInput(e)}
          value={this.state.email}
          required
        />
        <label>Create password*</label>
        <input
          id="password"
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => this.handelInput(e)}
          value={this.state.password}
          required
        />
        <label>Repeat password*</label>
        <input
          placeholder="Repeat password"
          id="repeatPassword"
          name="password"
          type="password"
          onChange={(e) => this.handelInput(e)}
          value={this.state.repeatPassword}
        />
        <label>
          <input
            type="checkbox"
            id="agreeTerms"
            onClick={(event) => {
              this.setState({ checked: event.target.checked });
            }}
            value={this.state.checked}
          />
          I agree to terms & conditions
        </label>
        <button type="submit">Register Account</button>
        <p className="or">Or</p>
        <button type="button">
          <img src={icon} alt="" />
          login
        </button>
      </form>
    );
  }
}
