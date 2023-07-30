import axios from "axios";
import Swal from "sweetalert2";

export async function depositeCredit(amount, mode, userId) {
  console.log(Math.round(amount));
  const data = {
    userId: userId,
    amount: amount,
    mode: mode,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/payment`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      url: response.data.session.url,
      sessionId: response.data.session.id,
      amount: response.data.amount,
    };
  } catch (error) {
    Swal.fire({
      title: "Faild to open the session",
      text: "Something Went Wrong",
      icon: "error",
    });
  }

  return {
    url: response.data.session.url,
    sessionId: response.data.session.id,
    amount: response.data.amount,
  };
}
