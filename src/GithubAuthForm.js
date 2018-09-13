import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

const GithubAuthButton = props => (
  <a onClick={props.onClick} className="btn btn-block btn-social btn-github">
    <i className="fa fa-github"></i>Sign in with Github
  </a>
)

const RegistrationMessage = props => {
  const message = props.message === "success" ?
    "イベントへの登録が完了しました。" : "登録に失敗しました。"

  return (
    <p><strong>{message}</strong></p>
  )
}

class GithubAuthForm extends React.Component {
  constructor() {
    super()

    this.state = {
      message: null
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    omniAuthRegistration(this.props.params)
      .then(result => this.setState({message: result}))
  }

  render() {
    return (
      <div>
        { this.state.message ?
          <RegistrationMessage message={this.state.message} />
          : <GithubAuthButton onClick={this.onClick} />
        }
      </div>
    )
  }
}

export default GithubAuthForm
