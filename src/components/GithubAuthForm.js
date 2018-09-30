import React from 'react'
import registerToEvent from '../api/registerToEvent'

const GithubAuthButton = props => (
  <a onClick={props.onClick} className="github-button">
    <i class="fa fa-github fa-inverse"></i> <span>Sign in with <strong>GitHub</strong></span>
  </a>
)

const RegistrationMessage = props => (
  <div>
    { props.messages.map(message => (
      <p><strong>{message}</strong></p>
    ))}
  </div>
)

class GithubAuthForm extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: null
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const params = {
      provider: 'github',
      eventId: this.props.eventId
    }

    registerToEvent(params)
      .then(messages => this.setState({messages: messages}))
  }

  render() {
    return (
      <div>
        { this.state.messages ?
          <RegistrationMessage messages={this.state.messages} />
          : <GithubAuthButton onClick={this.onClick} />
        }
      </div>
    )
  }
}

export default GithubAuthForm
