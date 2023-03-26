self.addEventListener("message", (event) => {
  // Validate the source and the message format
  if (event.origin === "http://localhost:3000" && event.data.type === "your_message_type") {
    // Forward the message to the background script
    chrome.runtime.sendMessage(event.data, (response) => {
      if (response.error) {
        console.error(response.error);
      } else {
        console.log(response.data);
      }
    });
  }
});

// Send a message to the web page, if necessary
self.postMessage({ type: "extension_loaded" }, "*");

export {};
