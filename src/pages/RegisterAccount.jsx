import React, { Component } from "react";
import Left from "../components/left/Left";
import Rigth from "../components/rigthbefor/Rigth";
import logo from "../components/img/logo.png";
import Vector1 from "../components/img/Vector1.png"; 


export default class RegisterAccount extends Component {
  render() {
    return (
      <div className="App">
        <Left
          logo={logo}
          classNameLogo="img-flex"
          body=" I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them."
          backgroundImage="backgroundImage"
          Vector1={Vector1}
        />

        <Rigth />
      </div>
    );
  }
}
