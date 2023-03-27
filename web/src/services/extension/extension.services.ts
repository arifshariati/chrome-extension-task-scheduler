const sendMessageToExtension = (payload: any) => {
  self.postMessage(
    {
      target: "chrome-extension",
      payload,
    },
    "*"
  );
};

export default sendMessageToExtension;
