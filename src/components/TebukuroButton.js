import React from 'react'
import ThumbUp from '../svg/baseline-thumb_up-24px.svg'

const TebukuroButton = ({ onClick }) => (
  <button className="tebukuro-button" onClick={onClick}>
    <ThumbUp/>
    <span>Register with <strong>Tebukuro</strong></span>
  </button>
)
export default TebukuroButton
