import { taskTypeEnum, scheduleTypeEnum } from "../enums";

interface IScheduleConfig {
  hour: number;
  minute: number;
}

interface IChromeExtensionPayload {
  taskType: taskTypeEnum;
  scheduleType: scheduleTypeEnum;
  scheduleConfig: IScheduleConfig[];
}

export default IChromeExtensionPayload;
