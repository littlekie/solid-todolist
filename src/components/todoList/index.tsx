import {  For, Show } from 'solid-js'
import { IconDelete, IconSelected } from '../icons'
import './todoList.css'
import { FilterType, ITodoItem, useTodoList } from './useTodoList'
interface todoListProps {
  list: ITodoItem[]
  onChange?: (item: ITodoItem, index: number) => void
  onDeleteChange?: (index: number) => void
}
export const TodoList = (props: todoListProps) => {
  const { list, filterTypeList, filterType, setFilterType } = useTodoList(props.list)

  const clearCompleted = () => { }
  const doSelect = (item: ITodoItem, index: number) => {
    props.onChange?.(item, index)
  }
  // props.refs = setFilterType
  return (
    <>
      <ul class='todos'>
        <Show when={list().length > 0}>
          <For each={list()}>
            {(item, index) => (
              <li classList={{ 'todos-item': true, completed: item.isDone }}>
                <button
                  class='checkbox-btn'
                  onClick={() => doSelect(item, index())}
                >
                  {item.isDone ? (
                    <IconSelected />
                  ) : (
                    <div class='checkbox'></div>
                  )}
                </button>
                <p class='content'>{item.taskName}</p>
                <button
                  class='close-btn'
                  onClick={() => props.onDeleteChange?.(index())}
                >
                  <IconDelete />
                </button>
              </li>
            )}
          </For>
        </Show>
      </ul>
      <footer class='options'>
        {/* <span>3 item left</span> */}
        <div class='filters'>
          <For each={filterTypeList}>
            {type => (
              <span
                class='option'
                classList={{ active: filterType() === type }}
                onclick={() => setFilterType(type)}
              >
                {FilterType[type]}
              </span>
            )}
          </For>
        </div>
        <span class='option' onclick={clearCompleted}>
          Clear completed
        </span>
      </footer>
    </>
  )
}
