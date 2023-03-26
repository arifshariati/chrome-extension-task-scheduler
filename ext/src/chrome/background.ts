import axios from "axios";

const makeApiCall = async (): Promise<any> => {
  try {
    const response = await axios.get("http://localhost:3001");
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  // Validate the incoming message
  if (request.type === "your_message_type") {
    // Perform the API call using the makeApiCall function
    makeApiCall()
      .then((data) => {
        sendResponse({ data });
      })
      .catch((error) => {
        sendResponse({ error: error.message });
      });
    return true; // Keep the message channel open for async sendResponse
  }
});
