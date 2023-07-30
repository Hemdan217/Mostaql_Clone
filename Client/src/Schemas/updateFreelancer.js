import * as Yup from 'yup'


export const updateFreelanceSchema = Yup.object().shape({
    firstName:Yup.string().required('Required').min(4,'must be more than 4 characters'),
    lastName:Yup.string().required('Required').min(4,'must be more than 4 characters'),
})