import { View, Text } from 'react-native'
import React, {Children, createContext, ReactElement, ReactNode, useState} from 'react'


interface ITasksContext{
    tasks: ITask[];
    addTask({id, title} : ITask): void;
}

interface ITaskProvider {
    children: ReactElement;
}

export interface ITask {
    id: string;
    title: string;
}

export  const TaskContext = createContext<ITasksContext>({} as ITasksContext)

export function TaskProvider({children} : ITaskProvider) {

    const [tasks, setTasks] = useState<ITask[]>([])

    const addTask = ({id, title}: ITask) => {
        console.log(id, title)
        const task = {id, title}
        setTasks([...tasks, task])
        console.log(tasks)
    }

  return (
    <TaskContext.Provider value={{tasks, addTask}}>
      {children}
    </TaskContext.Provider>
  )
}
