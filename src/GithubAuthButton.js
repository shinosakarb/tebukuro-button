import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

const params = {
  eventId: 6,
  provider: 'github'
}

const GithubAuthButton = () => (
  <a onClick={() => omniAuthRegistration(params)} className="btn btn-block btn-social btn-github">
    <i className="fa fa-github"></i>Sign in with Github
  </a>
)

export default GithubAuthButton
