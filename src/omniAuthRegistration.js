import omniAuthSignin from './omniAuthSignin'
import registerToEvent from './registerToEvent'

const baseUrl = 'http://tebukuro-api.shinosakarb.org'

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
  return omniAuthSignin(params)
    .then(headers => registerToEvent({...params, headers}))
    .then(res => res.ok ? ['イベントへの登録が完了しました'] : createErrorMessages(res.json()))
    .catch(err => ['登録処理中にエラーが発生しました'])
}

export default omniAuthRegistration
