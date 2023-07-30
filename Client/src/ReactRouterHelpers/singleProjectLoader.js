import axios from "axios";

export const singleProejctLoader = async ({ params }) => {
  let { projectId } = params;

  try {
    let projectData = await axios.get(
      `${import.meta.env.VITE_API_URL}/projects/${projectId}`
    );

    //catching error
    if (projectData.data.error) {
      const confirm = await swal({
        title: "Fetching categories faild",
        text: "Please Try again later",
        icon: "error",
      });

      if (confirm) {
        return redirect("/");
      }
    } else {
      return projectData.data;
    }
  } catch (error) {
    console.log(error);
  }
};
