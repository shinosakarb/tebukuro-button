import React from 'react'
import omniAuthRegistration from './omniAuthRegistration'

const params = {
  eventId: 6,
  provider: 'github'
}

const GithubAuthButton = () => (
  <button onClick={() => omniAuthRegistration(params)} >
    Githubアカウントで参加登録
  </button>
)

export default GithubAuthButton
