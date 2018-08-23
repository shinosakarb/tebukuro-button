'use strict';

const e = React.createElement;

class Form extends React.Component {
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

const domContainer = document.querySelector('#form_container');
ReactDOM.render(e(Form), domContainer);
