import axios from "axios";
export const makeApiCall = async () => {
  try {
    await axios.get("http://localhost:3001");
  } catch (error: any) {
    console.log(error.message);
  }
};
