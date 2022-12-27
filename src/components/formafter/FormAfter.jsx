import React, { Component } from "react";

const defaults = {
  email: "",
  password: "",
};
export default class FormAfter extends Component {
  state = {
    email: "",
    password: "",
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
      <form className="formAfter" onSubmit={(e) => this.handelSubmit(e)}>
        <label>Your email</label>
        <input
          id="email"
          placeholder="Enter email address"
          name="email"
          type="email"
          onChange={(e) => this.handelInput(e)}
          value={this.state.email}
          required
        />
        <label>Enter your password</label>
        <input
          id="password"
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => this.handelInput(e)}
          value={this.state.password}
          required
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
