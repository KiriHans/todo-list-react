import React from 'react'
import styles from "./layout.module.css"


interface TodoLayoutProps {
  children: React.ReactElement
}

export const TodoLayout = ({ children }: TodoLayoutProps) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
