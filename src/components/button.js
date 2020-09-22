import React from "react"
import styles from "./button.module.scss"

export default function cemetery() {
  return (
    <div className={styles.buttonWrap}>
      <a className={styles.buttonCtaPrimary}>
        パンフレットをもらう
      </a>
    </div>
  )
}