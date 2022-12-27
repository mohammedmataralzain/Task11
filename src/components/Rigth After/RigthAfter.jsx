import React, { Component } from "react";
import img1 from "../img/flat-color-icons_google.jpg";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import FormAfter from "../formafter/FormAfter";
import "./rigthAfter.css";

export default class RigthAfter extends Component {
  render() {
    return (
      <div className="rigth-befor">
        <h1>Join the game!</h1>
        <p>Go inside the best gamers social network!</p>
       
          <ul className="img">
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
          </ul>
          
          
       
        <FormAfter />
        <p>
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    );
  }
}
