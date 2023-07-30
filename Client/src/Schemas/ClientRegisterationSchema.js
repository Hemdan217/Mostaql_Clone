import * as Yup from 'yup'


const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


export const clientSchemaValidation = Yup.object().shape({
    firstName:Yup.string().required('Required').min(4,'Your Name Must Be More Than 3 Charachters'),
    lastName:Yup.string().required('Required').min(4,'Your lastName Must Be More Than 3 Charachters'),
    email:Yup.string().required('Required').email('Must Be Email'),
    phone:Yup.string().required('Required').matches(phoneRegex,{message:'Must Be Valid Phone Number (01123456789)'}),
    password: Yup.string().required('Required').matches(passwordRegex,{message:'Password Must be Strong'}),
    confirmPassword:Yup.string().required('Required'),
    address:Yup.string().required('Required').min(4,'Must be more than 4 Characters'),
    userName:Yup.string().required('Required').min(4,'Must be more than 3 characters')
})