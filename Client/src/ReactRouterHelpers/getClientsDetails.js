import axios from "axios"
import { redirect } from "react-router-dom"

export const getClientsProfileDetails = async ({params})=>{
    const clientId = params.userId

    try {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}/clients/${clientId}`)

        return data
    } catch (error) {
        redirect('/')
    }
}