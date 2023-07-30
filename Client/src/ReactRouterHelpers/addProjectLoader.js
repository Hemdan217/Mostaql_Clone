import axios from "axios";
export const addProjectLoader = async () => {
  const auth = JSON.parse(localStorage.getItem('isAuth'))
  if(!auth || auth.role !== 'client'){
    window.location.replace('/projects')
  }
  try {
    const [getAllCategories, getAllSkills] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/category`, {
        params: {
          lang: localStorage.getItem("lang"),
        },
      }),
      axios.get(`${import.meta.env.VITE_API_URL}/skills`, {
        params: {
          lang: localStorage.getItem("lang"),
        },
      }),
    ]);

    let skills = getAllSkills.data.results.reduce((acc, currentItem) => {
      acc.push({
        value: currentItem.name,
        label: currentItem.name,
        id: currentItem._id,
      });
      return acc;
    }, []);

    let categories = getAllCategories.data.categories.reduce(
      (acc, currentItem) => {
        acc.push({
          value: currentItem.title,
          label: currentItem.title,
          id: currentItem._id,
        });
        return acc;
      },
      []
    );

    return {
      categories,
      skills,
    };
  } catch (error) {
    console.log(error);
  }
};
