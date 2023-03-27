import { taskTypeEnum, scheduleTypeEnum, actionTypeEnum } from "../enums";

export interface IScheduleConfig {
  hour: number;
  minute: number;
}

export interface IPayload {
  actionType: actionTypeEnum;
  taskType: taskTypeEnum;
  scheduleType: scheduleTypeEnum;
  scheduleConfig: IScheduleConfig[];
}

export interface ITask {
  actionType: actionTypeEnum;
  taskType: taskTypeEnum;
  scheduleType: scheduleTypeEnum;
}
