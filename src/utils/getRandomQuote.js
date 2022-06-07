import axios from "axios";

export const getRandomQuote = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    return { text: data.content, author: data.author };
  } catch (error) {
    console.log(error);
  }
};
