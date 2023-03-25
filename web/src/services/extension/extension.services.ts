const sendMessageToExtension = (payload: any) => {
  window.postMessage(
    {
      target: "chrome-extension",
      payload,
    },
    "*"
  );
};

export default sendMessageToExtension;
