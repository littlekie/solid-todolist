import { Component, For, Show } from 'solid-js'
import './todoList.css'
export interface ITodoItem {
  taskName: string
  time: string
  isDone: boolean
}
interface todoListProps {
  list: ITodoItem[]
  onChange?: (item: ITodoItem, index: number) => void
  onDeleteChange?: (index: number) => void
}
export const TodoList = (props: todoListProps) => {
  return (
    <ul class='todos'>
      <Show when={props.list.length>0}>
        <For each={props.list}>
          {(item, index) => (
            <li classList={{ 'todos-item': true, completed: item.isDone }}>
              <button
                class='checkbox-btn'
                onClick={() => props.onChange?.(item, index())}
              >
                {item.isDone ? (
                  <svg
                    class='svg-inline--fa fa-check fa-w-16 check'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='check'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    data-v-132cabf7=''
                  >
                    <path
                      class=''
                      fill='currentColor'
                      d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                    ></path>
                  </svg>
                ) : (
                  <div class='checkbox'></div>
                )}
              </button>
              <p class='content'>{item.taskName}</p>
              <button class='close-btn' onClick={()=> props.onDeleteChange?.(index())}>
                <svg
                  class='svg-inline--fa fa-times fa-w-11 close'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='times'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 352 512'
                >
                  <path
                    class=''
                    fill='currentColor'
                    d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
                  ></path>
                </svg>
              </button>
            </li>
          )}
        </For>
      </Show>
    </ul>
  )
}
