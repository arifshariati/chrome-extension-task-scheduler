import { Fragment, useState, useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
import { sendMessageToExtension } from "../services/extension";
import { generateChromeExtensionPayload, stopChromeExtensionTasksPayload, getChromeExtensionTasksListPayload } from "../utils";
import { scheduleTypeEnum } from "../types/enums";

const DisplayInProgressText = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px", backgroundColor: "#e3f2fd", borderRadius: "5px", marginBottom: "10px" }}>
      <Typography>Scheduled task(s) are in progress.</Typography>
    </div>
  );
};

const TaskConfiguration = () => {
  const [isTaskInProgress, setIsTaskInProgress] = useState(false);
  const handleButtonClick = (scheduleType: scheduleTypeEnum) => {
    sendMessageToExtension(generateChromeExtensionPayload(scheduleType));
    setIsTaskInProgress(true);
  };

  const handleStopTasks = () => {
    sendMessageToExtension(stopChromeExtensionTasksPayload());
    setIsTaskInProgress(false);
  };

  const handleGetTasksList = () => {
    sendMessageToExtension(getChromeExtensionTasksListPayload());
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check the message source to ensure it's from your Chrome extension
      if (event.data && event.data.target === "web") {
        const taskList = event.data.payload;
        if (typeof taskList === "object" && Object.keys(taskList).length > 0) {
          console.log("Task is already in Progress....");
          setIsTaskInProgress(true);
        }
      }
    };

    self.addEventListener("message", handleMessage);

    handleGetTasksList();
    // Clean up the listener when the component unmounts
    return () => {
      self.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Fragment>
      <Card style={{ margin: "100px", padding: "10px", width: "500px", display: "flex", flexDirection: "column" }}>
        {isTaskInProgress && <DisplayInProgressText />}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {isTaskInProgress ? (
            <>
              <Button variant="contained" color="error" onClick={() => handleStopTasks()}>
                STOP
              </Button>
              <Button variant="outlined" color="info" onClick={() => handleGetTasksList()}>
                Check Tasks
              </Button>
            </>
          ) : (
            <>
              <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.SCHEDULED)}>
                {scheduleTypeEnum.SCHEDULED}
              </Button>
              <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.CONTINUOUS)}>
                {scheduleTypeEnum.CONTINUOUS}
              </Button>
              <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.JUSTONCE)}>
                {scheduleTypeEnum.JUSTONCE}
              </Button>
            </>
          )}
        </div>
      </Card>
    </Fragment>
  );
};

export default TaskConfiguration;
