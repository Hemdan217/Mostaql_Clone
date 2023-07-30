import axios from "axios";

export const getNotifications = async () => {
  try {
    const fetchData = await axios.get(
      `${import.meta.env.VITE_API_URL}/notifications/${
        JSON.parse(localStorage.getItem("isAuth")).id
      }`
    );
    const allNotifications = fetchData.data.results.reverse();

    return {
      allNotifications,
    };
  } catch (error) {
    console.log(error);
  }
};
