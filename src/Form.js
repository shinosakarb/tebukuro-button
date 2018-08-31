import React from 'react'
import fetch from 'isomorphic-fetch'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { registerd: false };
  }

  componentDidMount(){
    fetch('http://tebukuro-api.shinosakarb.org/events/1')
      .then( res => {
        console.log(res.json())
      })
  }

  render() {
    if (this.state.registered == true) {
      return 'You are the 1st participant!'
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ registered: true }) },
      'register'
    )
  }
}
