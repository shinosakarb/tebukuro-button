import React from 'react'
import fetch from 'isomorphic-fetch'
import omniAuthSignin from './omniAuthSignin'

const GithubAuthButton = () => (
  <button onClick={() => omniAuthSignin({provider: 'github'})} >
    Githubアカウントでサインイン
  </button>
)

export default GithubAuthButton
