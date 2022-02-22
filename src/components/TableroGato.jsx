import React from 'react'

import styles from '../styles/tableroGato.module.css'


export const TableroGato = () => {

    const valor = [
        ['😾', 'x', 'x',],
        ['x', 'x', 'x',],
        ['x', 'x', 'x',],
    ]

  return (
      <div>
          <h1>gato</h1>
        <table className={styles.tablero}>
            {valor.map(row => {
                return (
                    <tr>{row.map(valor => <td><p className={`${styles.text} + ${styles.last}`}>{valor}</p></td>)}</tr>
                )
            })}
        </table>
    </div>
  )
}
