import { taskTypeEnum, scheduleTypeEnum } from "../types/enums";
import IChromeExtensionPayload from "../types/interfaces";

const generateChromeExtensionPayload = (scheduleType: scheduleTypeEnum): IChromeExtensionPayload => {
  let payload = {
    taskType: taskTypeEnum.taskType1,
    scheduleType: scheduleType,
  } as IChromeExtensionPayload;

  const now = new Date();
  
  switch (scheduleType) {
    case scheduleTypeEnum.CONTINUOUS:
      payload = {
        ...payload,
        scheduleConfig: [
          { hour: 4, minute: 34 },
          { hour: 10, minute: 5 },
        ],
      };
      break;
    case scheduleTypeEnum.JUSTONCE:
      payload = {
        ...payload,
        scheduleConfig: [{ hour: now.getHours(), minute: now.getMinutes() + 1 }],
      };
      break;
    case scheduleTypeEnum.SCHEDULED:
      payload = {
        ...payload,
        scheduleConfig: [
          { hour: 2, minute: 14 },
          { hour: 12, minute: 35 },
        ],
      };
      break;
    default:
      payload = {
        ...payload,
        scheduleConfig: [{ hour: now.getHours(), minute: now.getMinutes() + 1 }],
      };
      break;
  }
  return payload;
};

export { generateChromeExtensionPayload };
