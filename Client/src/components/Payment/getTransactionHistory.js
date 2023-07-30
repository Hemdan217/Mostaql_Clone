import axios from "axios";

export async function getTransactionHistory(userId){
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/payment/userTrans/${userId}`)

       return response
    } catch (error) {
        console.log(error)
    }
}