import axios from "axios";
export const fetchMyOffers = async (setOffers, token, navigate, setLoading) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/freelancers/myoffers`,
      {
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );
    setOffers(response.data.results.reverse());
    document.title = "My Offers";
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
};
