import tasks from "../services/tasks";
import { actionTypeEnum } from "../types/enums";

const interval = 60 * 1000;
const allowedTarget = "chrome-extension";

const tasksInstance = tasks();

chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  const { target, payload } = request;
  // handle stop task request
  if (payload?.actionType === actionTypeEnum.STOP) {
    tasksInstance.stopTasks();
    const taskList = tasksInstance.getTaskList();
    console.log(taskList);
    return;
  }

  // handle schedule task request
  if (target === allowedTarget) {
    tasksInstance.addTask(request.payload);

    const taskList = tasksInstance.getTaskList();
    console.log(taskList);
  }
});

setInterval(tasksInstance.executeTasks, interval);
