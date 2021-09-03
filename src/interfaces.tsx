export interface TasksInterface {
  text: string;
  timestamp: number;
  tasks: Array<TaskInterface>;
}

export interface TaskInterface {
  id?: number;
  name?: string;
  status?: boolean;
  active?: boolean;
}
