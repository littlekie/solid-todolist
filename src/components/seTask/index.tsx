import { batch, Component, createSignal } from 'solid-js'
import { createLocalStore } from '../../utils/storage'
import { ITodoItem } from '../todoList'
import './set-task.css'
export const SetTask: Component<{
  onAddTodo: (item: ITodoItem) => void
}> = (props) => {
  const [newTitle, setTitle] = createSignal('')
  const addTodo = (e: Event) => {
    e.preventDefault()
    batch(() => {
      props.onAddTodo({
        taskName: newTitle(),
        time: new Date().toLocaleString(),
        isDone: false
      })
      setTitle('')
    })
  }
  return (
    <div class='form-wrapper'>
      <div class='form-input'>
        <input
          placeholder='Add new todo...'
          value={newTitle()}
          onChange={e => addTodo(e)}
          onInput={e => setTitle(e.currentTarget.value)}
        />
      </div>
      <button type="submit" class="submit-btn"><span data-v-5f8a7fba="">Submit</span></button>
    </div>
  )
}
