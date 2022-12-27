import React, { Component } from "react";

import Logo from "../logo/Logo";
import comma from "../img/comma.png";
import group from "../img/Group.png";

import "./left.css";

class Left extends Component {
  render(props) {
    return (
      <div className={`left ${this.props.backgroundImage}`}>
        <Logo src={this.props.logo} />
        <div  className={this.props.classNameLogo}>
          <img src={group} alt="" />
        </div>
        <div className="content" >
          <img src={comma} alt="" />
          <p className={`${this.props.classNameColor ? "color" : ""}`}>{this.props.body}</p>
          <h4 className={`${this.props.classNameColor ? "color" : ""}`} >Hideo Kojima</h4>
          <div className={`img-flex ${this.props.classNamePostion ? "postion" : ""}`}>
            <img src={this.props.Vector1} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
