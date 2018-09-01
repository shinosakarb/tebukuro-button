import omniAuthSignin from './omniAuthSignin'

const omniAuthRegistration = (params) => {

  omniAuthSignin(params)
    .then((res) => console.log(res))
}
