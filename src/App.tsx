import { batch, Component } from 'solid-js'
import styles from './App.module.css'
import { Header, HeaderProps } from './components/header'
import { SetTask } from './components/seTask'
import {TodoList } from './components/todoList'
import { FilterType, ITodoItem } from './components/todoList/useTodoList'
import { createLocalStore, removeIndex } from './utils/storage'

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
  const [todos, setTodos] = createLocalStore<ITodoItem[]>('todos', todoList)
  const changeList = (item: ITodoItem, index: number) => {
    setTodos(index, 'isDone', !item.isDone)
  }
  let todolistRef 
  const addTodo = (item: ITodoItem) => {
    batch(() => {
      setTodos(todos.length, item)
      // TODO solid js 如何调用子组件方法
      // todolistRef.setFilterType(FilterType.All)
    })
  }
  return (
    <div class={styles.App}>
      {Header(titleProps)}
      <div class={styles.container}>
        <SetTask onAddTodo={addTodo}></SetTask>
        <TodoList
          list={todos}
          onChange={changeList}
          onDeleteChange={index => setTodos(t => removeIndex(t, index))}
        ></TodoList>
      </div>
    </div>
  )
}

export default App
