import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

const GithubAuthButton = props => (
  <a onClick={() => omniAuthRegistration(props.params)} className="btn btn-block btn-social btn-github">
    <i className="fa fa-github"></i>Sign in with Github
  </a>
)

export default GithubAuthButton
