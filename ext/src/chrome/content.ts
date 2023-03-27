const allowedSource = "http://localhost:3000";
const allowedTarget = "chrome-extension";

self.addEventListener("message", (event) => {
  if (event.origin === allowedSource && event.data.target === allowedTarget) {
    chrome.runtime.sendMessage(event.data);
  }
});

const sendMessageToWeb = (payload: any) => {
  self.top?.postMessage(
    {
      target: "web",
      payload,
    },
    "*"
  );
};

export default sendMessageToWeb;
