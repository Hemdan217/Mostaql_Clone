import axios from "axios";
import Swal from "sweetalert2";
export async function withdrawFreelancer(amount,userId){

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/payment/withdraw`,
        JSON.stringify({amount,userId}),{
            headers:{
                "Content-Type":'application/json'
            }
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}