import React, { Component } from 'react'
import Left from "../components/left/Left";
import RigthAfter from "../components/Rigth After/RigthAfter";
import logo2 from "../components/img/gg.png";
import joystick_trans from "../components/img/joystick_trans.png"; 

export default class JoinTheGame extends Component {
  render() {
    return (
      <div className='App'>
        <Left logo = {logo2}
             classNameLogo ="hidden"

        body=" I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them."
            Vector1 = {joystick_trans}
            classNamePostion = "postion"
            classNameColor="color"/>
           
      <RigthAfter />
      </div>
    )
  }
}
