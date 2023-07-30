import axios from "axios";
import { redirect } from "react-router-dom";
export async function getUserByIdLoader({ params }) {
  const { userId } = params;
  const userData = JSON.parse(localStorage.getItem("isAuth"));
  if (!userData) return redirect("/");
  if (!userId) return redirect("/");
  if (userData.role === "freelancer") {
    try {
      const [freelancerData, getAllSkills] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/freelancers/${userId}`),
        axios.get(`${import.meta.env.VITE_API_URL}/skills`),
      ]);

      let skills = getAllSkills.data.results.reduce((acc, prevItem) => {
        acc.push({
          value: prevItem.name,
          lable: prevItem.name,
          id: prevItem._id,
        });
        return acc;
      }, []);

      return {
        data: freelancerData.data.data,
        skills,
      };
    } catch (error) {
      return redirect("/");
    }
  } else {
    try {
      const clientData = await axios.get(
        `${import.meta.env.VITE_API_URL}/clients/${userId}`
      );
      return clientData;
    } catch (error) {
      return redirect("/");
    }
  }
}
