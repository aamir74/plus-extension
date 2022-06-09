import axios from "axios";

export const getRandomQuote = async () => {
  try {
    let { data } = await axios.get("https://type.fit/api/quotes");
    data = data[Math.floor(Math.random() * (99 - 1 + 1)) + 1];
    return { text: data.text, author: data.author };
  } catch (error) {
    console.log(error);
    return {
      text: "From error to error one discovers the entire truth.",
      author: "Sigmund Freud",
    };
  }
};
