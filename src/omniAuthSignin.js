// const baseAuthUrl = `${process.env.BASE_URL}auth`
const baseAuthUrl = 'http://tebukuro-api.shinosakarb.org/auth'

const validateTokenUrl = `${baseAuthUrl}/validate_token`

const openAuthPopup = (provider) => {
  const authQuery = `auth_origin_url=${encodeURIComponent(window.location.href)}`
  const omniauthUrl = `${baseAuthUrl}/${provider}?${authQuery}`
  const settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=400,height=300'

  return window.open(omniauthUrl, provider, settings)
}

const requestHeadersFromQuery = popup => {
  const searchParams = new URLSearchParams(popup.location.search)
  return {
    'access-token': searchParams.get('auth_token'),
    client: searchParams.get('client_id'),
    uid: searchParams.get('uid'),
  }
}

const checkDidUserAuthenticated = (popup, resolve, reject) => {
  // In order to check authentication in popup window has completed,
  // we need to fetch search queries of popup windows address.
  // But in authenticating in provider's domain, this check causes cors exception
  // for secutity reason.
  // To handle this, catch exception and throw away...
  let authHeaders = {}
  try {
    authHeaders = requestHeadersFromQuery(popup)
  } catch (err) { }

  if (authHeaders.uid) {
    popup.close()
    return resolve(authHeaders)
  } else if (popup.closed) {
    return reject(new Error('Error has occured in User Authentication with the provider'))
  }
  return setTimeout(() => checkDidUserAuthenticated(popup, resolve, reject), 100)
}

const omniAuthSignin = params => {
  const popup = openAuthPopup(params.provider)

  return new Promise((resolve, reject) => checkDidUserAuthenticated(popup, resolve, reject))
}

export default omniAuthSignin
