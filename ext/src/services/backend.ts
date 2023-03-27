const baseUrl = "http://localhost:3001";
const makeApiCall = async (endpoint: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}/${endpoint}`);
  } catch (error: any) {
    console.log(error.message);
  }
};

export default makeApiCall;
