import axios from "axios";

export const fetchBitcoinPrice = async () => {
  const URL =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";
  try {
    const payload = await axios.get(`${URL}`);
    return payload.data;
  } catch (error) {
    console.error("Something is wrong", error);
  }
};
