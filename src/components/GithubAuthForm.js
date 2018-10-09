import React from 'react'

const GithubAuthButton = ({ onClick }) => (
  <a onClick={onClick} className="github-button">
    <i class="fa fa-github fa-inverse"></i> <span>Sign in with <strong>GitHub</strong></span>
  </a>
)

const RegistrationMessage = ({ messages }) => (
  <div>
    { messages.map(message => (
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
