import axios from "axios";
import swal from "sweetalert";
export async function updateUserData(role, id, values, token) {

  let type = role === "freelancer" ? "freelancers" : "clients";
  try {
    const freelancerUpdated = await axios.patch(
      `${import.meta.env.VITE_API_URL}/${type}/${id}`,
      JSON.stringify(values),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const confirm = await swal({
      title: "Updated Done",
      icon: "success",
    });

    if (confirm) {
      window.location = `/profile/statistics/${id}`;
    }
  } catch (error) {
    swal({
      title: "fild to update",
      icon: "error",
    });
  }
}
