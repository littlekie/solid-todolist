
import { Component, Show } from 'solid-js'
import styles from '../App.module.css'

export interface HeaderProps {
  title: string
  logo?: string
}
export const Header: Component<HeaderProps> = (props: HeaderProps) => {
  return (
    <header class={styles.header}>
      <Show when={props.logo}>
        {() => <img src={props.logo} class={styles.logo} alt='logo' />}
      </Show>
      <h2>{props.title ? props.title : 'Todo List'}</h2>
    </header>
  )
}