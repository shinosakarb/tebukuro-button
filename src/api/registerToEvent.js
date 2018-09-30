import Urls from '../constants/urls'
import omniAuthSignin from './omniAuthSignin'

const registrationUrl = eventId => `${Urls.events}/${eventId}/registrations`

const setAuthHeaders = headers => {
  let authHeaders = new Headers()

  authHeaders.append('access-token', headers['access-token'])
  authHeaders.append('uid', headers['uid'])
  authHeaders.append('client', headers['client'])

  return authHeaders
}

const createErrorMessages = res => (
  res.then(data => {
    const errorMessages = []

    Object.values(data).forEach((messages) => {
      messages.forEach((message) => {
        errorMessages.push(message)
      })
    })
    return errorMessages
  })
)

const omniAuthRegistration = (params) => {
  const { eventId, headers } = params
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: setAuthHeaders(headers)
  }

  return fetch(registrationUrl(eventId), config)
}

const registerToEvent = (params) => {
  return omniAuthSignin(params)
    .then(headers => omniAuthRegistration({...params, headers}))
    .then(res => res.ok ? ['イベントへの登録が完了しました'] : createErrorMessages(res.json()))
    .catch(err => ['登録処理中にエラーが発生しました'])
}

export default registerToEvent
