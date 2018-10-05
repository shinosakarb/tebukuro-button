import React from 'react'
import ThumbUp from '-!react-svg-loader!../svg/baseline-thumb_up-24px.svg'

const TebukuroButton = props => (
  <button className="btn" onClick={props.onClick}>
    <ThumbUp/>
    <span>Register with <strong>Tebukuro</strong></span>
  </button>
)
export default TebukuroButton
