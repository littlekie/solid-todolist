import {
  batch,
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  Show,
  Suspense,
  untrack
} from 'solid-js'
import styles from './App.module.css'
import { Header, HeaderProps } from './components/header'
import { SetTask } from './components/seTask'
import { ITodoItem, TodoList } from './components/todoList'

const App: Component = () => {
  const titleProps: HeaderProps = {
    title: 'Todo List Task'
  }
  const todoList = [
    {
      taskName: 'first todo-item',
      time: '12444',
      isDone: false
    },
    {
      taskName: 'second todo-item',
      time: '12444',
      isDone: true
    }
  ]
  const [getTodoList, setTodoList] = createSignal<ITodoItem[]>(todoList)
  const changeList = (item: ITodoItem, index: number) => {
    let newList = JSON.parse(JSON.stringify(getTodoList()))
    // 注意： 内存地址不同的话，useEffect还是会执行effect。
    newList[index].isDone = !item.isDone
      setTodoList(newList)
  }
  const todos = createMemo(()=>getTodoList())
  // newList[index].isDone = !item.isDone
  // createEffect(() => {
  //   changeList()
  // })
  return (
    <div class={styles.App}>
      {Header(titleProps)}
      <div class={styles.container}>
        <SetTask></SetTask>
        <TodoList list={todos()} onChange={changeList}></TodoList>
      </div>
    </div>
  )
}

export default App
