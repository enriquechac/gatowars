import React from 'react'

import styles from '../styles/loadingScreen.module.css'

export const LoadingScreen = () => (
    <div className={styles.container}>
        <h1 className={styles.logo}>😾</h1>
        <h1 className={styles.title}>GatoWars</h1>
        <p>cargando...</p>
    </div>
)
