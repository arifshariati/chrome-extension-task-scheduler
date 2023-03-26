const allowedTarget = "chrome-extension";
const backendBaseUrl = "http://localhost:3001";

const makeApiCall = async (): Promise<void> => {
  try {
    const response = await fetch(backendBaseUrl);
    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }
  } catch (error: any) {
    console.log(`ERROR: ${error.message}`);
  }
};

chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  if (request.target === allowedTarget) {
    makeApiCall();
  }
});

export {};
