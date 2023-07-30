import axios from "axios";
import Swal from "sweetalert2";
export const sendOTPCodeVerification = async (userId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/freelancers/verify-me`,
      JSON.stringify({ freelancerId: userId }),
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Faild To Get Your Code",
      icon: "error",
    });
  }
};

export const verifyOTPCode = async (freelancerId, OTPCode) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/freelancers/verify-code`,
      JSON.stringify({
        freelancerId,
        OTPCode:OTPCode,
      }),
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    return response.data
  } catch (error) {
        return error.response.data
  }
};
