export const makeApiCall = async () => {
  try {
    await fetch("http://localhost:3001");
  } catch (error: any) {
    console.log(error.message);
  }
};
