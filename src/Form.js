import React from 'react'

const e = React.createElement;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { registerd: false };
  }

  render() {
    if (this.state.registered == true) {
      return 'It is the 1st event!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ registered: true }) },
      'register'
    );
  }
}
