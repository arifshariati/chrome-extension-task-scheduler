const allowedSource = "http://localhost:3000";
const allowedTarget = "chrome-extension";

self.addEventListener("message", (event) => {
  if (event.origin === allowedSource && event.data.target === allowedTarget) {
    chrome.runtime.sendMessage(event.data);
  }
});

export {};
