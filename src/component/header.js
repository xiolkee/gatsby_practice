import React from "react"
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerInner}>
        <div>LOGO</div>
        <div>menu</div>
      </div>
    </header>
  )
}