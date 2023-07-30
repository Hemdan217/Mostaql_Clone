import axios from "axios";
import Swal from "sweetalert2";
let projectId = 0;
let freelancerId = 0;
let projectStatus = 0;
let allOffers = [];

const alertFire = (title, icon) => {
  Swal.mixin({
    toast: true,
    animation: false,
    position: "top-right",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  }).fire({
    title,
    icon,
  });
};

const fetchDetails = async (id, setDetails) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${id}`,
    {
      params: {
        lang: localStorage.getItem("lang"),
      },
    }
  );
  setDetails(response.data);
  document.title = `Mostaql Clone | ${response.data.title}`;
};

const fetchOffer = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${id}/offers`
  );
  allOffers = response.data.results;
  projectStatus = response.data.results.status;
};

export const fetchData = async (id, setDetails, setLoading, navigate) => {
  projectId = id;
  try {
    await Promise.all([fetchDetails(id, setDetails), fetchOffer(id)]);
    setLoading(false);
  } catch (e) {
    navigate("/projects");
  }
};
export const fetchMyOffer = async (id, setMyOffer) => {
  freelancerId = id;
  if (allOffers.length) {
    setMyOffer(allOffers.find((offer) => offer.freelancerId._id == id));
  }
};
export const fetchOffers = async (setOffers) => {
  console.log(projectStatus);
  if (projectStatus !== "open") {
    if (allOffers) {
      setOffers(
        allOffers.filter((offer) => offer.freelancerId._id != freelancerId)
      );
    }
  } else {
    if (allOffers) {
      setOffers(allOffers);
    }
  }
};

export const sendMyOffer = async (data, token, setMyOffer) => {
  delete data["attachments"];

  const formData = new FormData();
  for (let i in data) {
    console.log(i);
    formData.append(i, data[i]);
  }

  if (document.querySelector("#attachments").files.length) {
    const fileList = document.querySelector("#attachments").files;
    for (let i = 0; i < fileList.length; i++) {
      formData.append("attachments", fileList[i]);
    }
  }
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/projects/${projectId}/offers`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    }
  );
  alertFire("Successfully Added The Offer", "success");
  setMyOffer(response.data.results);
};
export const updateOffer = async (data, token, offerId) => {
  await axios.patch(`${import.meta.env.VITE_API_URL}/offers/${offerId}`, data, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });
  alertFire("Successfully Updated The Offer", "info");
};

export const hireFreelancer = async (token, offerId, title, navigate, t) => {
  Swal.fire({
    title: t("Are you sure to Hire This Freelancer?"),
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: t("Yes, Confirm it!"),
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}/accept`,
        {
          offerId,
          title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      location.reload();
    }
  });
};
export const releaseMoney = async (
  freelancerId,
  clientId,
  offerId,
  t,
  navigate
) => {
  Swal.fire({
    title: t("Are you sure to complete this project?"),
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: t("Yes, complete it!"),
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/projects/${projectId}/complete`,
        {
          freelancerId,
          clientId,
          offerId,
        }
      );

      Swal.fire({
        title: "the project has been completed successfully ",
      }).then(() => location.reload());
    }
  });
};

export const sendMessage = async (token, freelancerId, title, navigate) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/chats`,
    {
      freelancerId,
      projectId,
      title,
    },
    {
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );
  navigate("/chats/" + response.data.results._id);
};

export const ProjectDeactivating = async (id, token) => {
  let result = await axios.patch(
    `${import.meta.env.VITE_API_URL}/projects/${id}/deactivate`,
    {},
    {
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );
  let data = JSON.parse(result.data.status);
  return data;
};

// export const fetchMyOffer = async (id, setMyOffer, projectId) => {
//   freelancerId = id;
//   const response = await axios.get(
//     `${import.meta.env.VITE_API_URL}/projects/${projectId}/offers`
//   );

//   allOffers = response.data.results;
//   if (allOffers.length) {
//     setMyOffer(allOffers.find((offer) => offer.freelancerId._id == id));
//   }
// };
// export const fetchOffers = (id, setOffers) => {
//   console.log("Hi Dear Fetching  Offers");
//   console.log(allOffers);

//   setOffers(
//     allOffers.filter((offer) => offer.freelancerId._id != freelancerId)
//   );
// };
