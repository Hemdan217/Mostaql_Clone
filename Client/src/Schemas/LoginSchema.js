import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email:Yup.string().required('Required').email('must be email'),
    password:Yup.string().required('Required'),
    loginType:Yup.string().required('Required')
})