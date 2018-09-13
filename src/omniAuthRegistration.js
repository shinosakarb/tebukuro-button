import omniAuthSignin from './omniAuthSignin'

const baseUrl = 'http://tebukuro-api.shinosakarb.org'
const registrationUrl = eventId => `${baseUrl}/events/${eventId}/registrations`

const setAuthHeaders = headers => {
  let authHeaders = new Headers()

  authHeaders.append('access-token', headers['access-token'])
  authHeaders.append('uid', headers['uid'])
  authHeaders.append('client', headers['client'])

  return authHeaders
}

const registerToEvent = (params) => {
  const { eventId, headers } = params
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: setAuthHeaders(headers)
  }

  return fetch(registrationUrl(eventId), config)
}

const omniAuthRegistration = (params) => {
  return omniAuthSignin(params)
    .then(headers => registerToEvent({...params, headers}))
    .then(res => 'success')
    .catch(err => 'error' )
}

export default omniAuthRegistration
