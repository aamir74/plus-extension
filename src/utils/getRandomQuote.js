export const getRandomQuote = async (setQuote) => {
    try {
      const { data } = await axios.get("https://api.quotable.io/random");
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.log(error);
    }
  };