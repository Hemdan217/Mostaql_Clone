import axios from "axios";
export const fetchAllChats = async (token, setChats, role) => {
  try {
    if (role == "client") {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/client/chats`,
        {
          headers: { "Content-Type": "application/json", Authorization: token },
        }
      );
      console.log(response.data.results);
      setChats(response.data.results);
    } else if (role === "freelancer") {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/freelancer/chats`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response.data.results);
      setChats(response.data.results);
    }
  } catch (e) {
    console.log(e);
  }
};
