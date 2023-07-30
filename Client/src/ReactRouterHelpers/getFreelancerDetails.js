import axios from "axios"
import { redirect } from "react-router-dom"

export const getFreelancerProfilePage = async ({params})=> {
    const freelancerId = params.userId

    try {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}/freelancers/${freelancerId}`)
         return data.data
        
    } catch (error) {
       redirect('/')
    }


}