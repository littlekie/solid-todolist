import { createMemo, createSignal } from 'solid-js'

export interface ITodoItem {
  taskName: string
  time: string
  isDone: boolean
}
export enum FilterType {
  All,
  Active,
  Completed
}

export function useTodoList (todolist: ITodoItem[]) {
  const [filterType, setFilterType] = createSignal<FilterType>(
    FilterType.Active
  )
  const filterTypeList: FilterType[] = [
    FilterType.All,
    FilterType.Active,
    FilterType.Completed
  ]
  const list = createMemo(() =>
    todolist.filter(item => {
      if (filterType() === FilterType.All) {
        return true
      }
      if (filterType() === FilterType.Completed) {
        return item.isDone
      }
      return !item.isDone
    })
  )
  return {
    filterType,
    setFilterType,
    filterTypeList,
    list
  }
}
