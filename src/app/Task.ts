export interface Task {
  id?: number, //el signo ? sirve para decir que puede o no estar el id
  text: string,
  day: string,
  reminder: boolean
}
