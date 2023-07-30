import axios from "axios";
import { redirect } from "react-router-dom";
import swal from "sweetalert";
export const httpRegisterFreelancerLoader = async ({ request }) => {
  const getAllCategories = await axios.get(
    `${import.meta.env.VITE_API_URL}/category`
  );

  //catching error

  if (getAllCategories.data.error) {
    const confirm = await swal({
      title: "Fetching categories faild",
      text: "Please Try again later",
      icon: "error",
    });

    if (confirm) {
      return redirect("/");
    }
  }

  return getAllCategories.data.categories;
};
