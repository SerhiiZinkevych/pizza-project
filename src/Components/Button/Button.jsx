import React from 'react'

import styles from './Button.module.css'

export default function Button({ className, children }) {
  return <button className={styles[className]}>{children}</button>
}
