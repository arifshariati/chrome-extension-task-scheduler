const allowedSource = "http://localhost:3000";
const allowedTarget = "chrome-extension";

self.addEventListener("message", (event) => {
  if (event.origin === allowedSource && event.data.target === allowedTarget) {
    chrome.runtime.sendMessage(event.data, (response) => {
      if (response?.target === "contentScript") {
        sendMessageToWeb(response?.payload);
      }
    });
  }
});

const sendMessageToWeb = (payload: any) => {
  self.postMessage(
    {
      target: "web",
      payload,
    },
    allowedSource
  );
};

export default sendMessageToWeb;
