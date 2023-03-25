import { Fragment, useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { sendMessageToExtension } from "../services/extension";
import { generateChromeExtensionPayload } from "../utils";
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
  return (
    <Fragment>
      <Card style={{ margin: "100px", padding: "10px", width: "500px", display: "flex", flexDirection: "column" }}>
        {isTaskInProgress && <DisplayInProgressText />}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.SCHEDULED)}>
            {scheduleTypeEnum.SCHEDULED}
          </Button>
          <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.CONTINUOUS)}>
            {scheduleTypeEnum.CONTINUOUS}
          </Button>
          <Button disabled={isTaskInProgress} variant="contained" onClick={() => handleButtonClick(scheduleTypeEnum.JUSTONCE)}>
            {scheduleTypeEnum.JUSTONCE}
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default TaskConfiguration;
