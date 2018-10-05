import React from 'react'

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

const GithubAuthForm = props => {
  const onClick = () => {
    const params = {
      provider: 'github',
      eventId: props.eventId
    }
    props.onRegister(params)
  }

  return (
    <div>
      { props.messages ?
          <RegistrationMessage messages={props.messages} />
          : <GithubAuthButton onClick={onClick} />
      }
    </div>
  )
}

export default GithubAuthForm
