import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

class GithubAuthButton extends React.Component {
  constructor() {
    super()

    this.state = {
      message: null
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    omniAuthRegistration(this.props.params)
      .then(result => this.setState({message: result}))
  }

  render() {
    return (
      <div>
       { this.state.message ?
        <p>{this.state.message}</p>
        :
        <a onClick={this.onClickHandler} className="btn btn-block btn-social btn-github">
          <i className="fa fa-github"></i>Sign in with Github
        </a>
       }
      </div>
    )
  }
}

export default GithubAuthButton
