import { taskTypeEnum, scheduleTypeEnum, actionTypeEnum } from "../enums";

interface IScheduleConfig {
  hour: number;
  minute: number;
}

interface IChromeExtensionPayload {
  actionType: actionTypeEnum;
  taskType: taskTypeEnum;
  scheduleType: scheduleTypeEnum;
  scheduleConfig: IScheduleConfig[];
}

export default IChromeExtensionPayload;
