import { IScheduleConfig, IPayload, ITask } from "../types/interfaces";
import makeApiCall from "./backend";

interface ITaskList {
  [key: string]: ITask[];
}
const tasks = () => {
  let taskList: ITaskList = {};

  const getTaskList = (): ITaskList => taskList;

  const getHashMapTaskList = (hashMap: string): ITask[] | undefined => {
    if (hashMap) return taskList[hashMap];
    return undefined;
  };

  const addTask = (payload: IPayload): void => {
    if (payload?.scheduleConfig.length > 0) {
      payload?.scheduleConfig.forEach((config: IScheduleConfig) => {
        const index = `${config?.hour}:${config?.minute}`;
        // prepare task object
        const taskPayload: ITask = {
          actionType: payload.actionType,
          taskType: payload.taskType,
          scheduleType: payload.scheduleType,
        };
        // add task to task list
        taskList[index] ? taskList[index].push(taskPayload) : (taskList[index] = [taskPayload]);
      });
    }
  };

  const stopTasks = () => (taskList = {});

  const executeTasks = (): void => {
    try {
      const now = new Date();
      const hashMap = `${now.getHours()}:${now.getMinutes()}`;
      // Step 1: get tasks list for current hashMap
      const tasksToExecute = getHashMapTaskList(hashMap);

      if (!tasksToExecute) return console.log(`No task to execute now (${hashMap})`);

      // Step 2: execute tasks - API calls
      for (const taskToExecture of tasksToExecute) {
        makeApiCall(taskToExecture.taskType);
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    }
  };

  return { getTaskList, getHashMapTaskList, addTask, stopTasks, executeTasks };
};

export default tasks;
