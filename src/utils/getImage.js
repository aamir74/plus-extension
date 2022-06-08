import axios from "axios";

export const getCoverImage = async () => {
  try {
    return await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=nC6cZ2w0pVKQ1Xu93LvOmaZszLlpjhYoJ-lbBBdHOpA`,
      {
        params: { query: { category: "landscapes" }, orientation: "landscape" },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
