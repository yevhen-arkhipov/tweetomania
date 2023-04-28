import axios from "axios";

axios.defaults.baseURL = "https://644c17be4bdbc0cc3aa23bf5.mockapi.io/api";

export const getAllTweets = async () => {
  try {
    const { data } = await axios.get(`/tweets`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
