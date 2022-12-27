import React, { Component } from "react";
import arrowBack from "../img/arrow_back.jpg";
import icon from "../img/flat-color-icons_google.jpg";
import Form from "../formbefore/Form";
import "./rigth.css";

export default class Rigth extends Component {
  render() {
    return (
      <div className="rigth">
        <div className="arrow-back">
          <img src={arrowBack} alt="" />
          <span>Back</span>
        </div>
        <div className="content">
          <h1>Register Individual Account!</h1>
          <p>
            For the purpose of gamers regulation, your details are required.
          </p>

          <Form />
        </div>
      </div>
    );
  }
}
