import { taskTypeEnum, scheduleTypeEnum, actionTypeEnum } from "../types/enums";
import IChromeExtensionPayload from "../types/interfaces";

const generateChromeExtensionPayload = (scheduleType: scheduleTypeEnum): IChromeExtensionPayload => {
  let payload = {
    actionType: actionTypeEnum.SCHEDULE,
    taskType: taskTypeEnum.taskType1,
    scheduleType: scheduleType,
  } as IChromeExtensionPayload;

  const now = new Date();

  switch (scheduleType) {
    case scheduleTypeEnum.CONTINUOUS:
      payload = {
        ...payload,
        scheduleConfig: [
          { hour: now.getHours(), minute: now.getMinutes() + 2 },
          { hour: now.getHours() + 1, minute: now.getMinutes() + 2 },
        ],
      };
      break;
    case scheduleTypeEnum.JUSTONCE:
      payload = {
        ...payload,
        scheduleConfig: [{ hour: now.getHours(), minute: now.getMinutes() + 2 }],
      };
      break;
    case scheduleTypeEnum.SCHEDULED:
      payload = {
        ...payload,
        scheduleConfig: [
          { hour: now.getHours(), minute: now.getMinutes() + 2 },
          { hour: now.getHours() + 1, minute: now.getMinutes() + 2 },
        ],
      };
      break;
    default:
      payload = {
        ...payload,
        scheduleConfig: [{ hour: now.getHours(), minute: now.getMinutes() + 2 }],
      };
      break;
  }
  return payload;
};

const stopChromeExtensionTasksPayload = (): Partial<IChromeExtensionPayload> => {
  return { actionType: actionTypeEnum.STOP };
};

export { generateChromeExtensionPayload, stopChromeExtensionTasksPayload };
