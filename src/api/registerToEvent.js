import Urls from '../constants/urls'
import omniAuthSignin from '../utils/omniAuthSignin'

const setAuthHeaders = headers => {
  let authHeaders = new Headers()

  authHeaders.append('access-token', headers['access-token'])
  authHeaders.append('uid', headers['uid'])
  authHeaders.append('client', headers['client'])

  return authHeaders
}

const omniAuthRegistration = (params) => {
  const { eventId, headers } = params
  const registrationUrl = `${Urls.events}/${eventId}/registrations`
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: setAuthHeaders(headers)
  }

  return fetch(registrationUrl(eventId), config)
}

const successMessage = res => (
  res.then(data => (
    data.user_participation.on_waiting_list ?
      ['キャンセル待ちに登録しました'] : ['参加登録が完了しました']
  ))
)

const errorMessages = res => (
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

const registerToEvent = (params) => {
  return omniAuthSignin(params)
    .then(headers => omniAuthRegistration({...params, headers}))
    .then(res => {
      return res.ok ? successMessage(res.json()) : errorMessages(res.json())
    })
    .catch(err => ['登録処理中にエラーが発生しました'])
}

export default registerToEvent
