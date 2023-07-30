import axios from "axios";

export async function uploaderPhoto(avatar, userId, token,role) {
  let type = role === 'freelancer' ? 'freelancers' : 'clients'
  try {
    const uploaded = await axios.post(
      `${import.meta.env.VITE_API_URL}/${type}/upload-avatar/${userId}`,
      avatar,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      }
    );

    return uploaded;
  } catch (error) {}
}
