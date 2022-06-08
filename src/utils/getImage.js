import axios from "axios";

export const getCoverImage = async () => {
  try {
    return await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`,
      {
        params: { query: { category: "landscapes" }, orientation: "landscape" },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
