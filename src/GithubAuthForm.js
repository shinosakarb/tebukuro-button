import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

const GithubAuthButton = props => (
  <a onClick={props.onClick}>
    <i className="fa fa-github"></i>Sign in with Github
  </a>
)

const RegistrationMessage = props => {
  return (
    <div>
      { props.messages.map(message => (
        <p><strong>{message}</strong></p>
      ))}
    </div>
  )
}

class GithubAuthForm extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: null
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    omniAuthRegistration(this.props.params)
      .then(result => this.setState({messages: result}))
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
