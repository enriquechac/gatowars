import React from 'react';
import { ContenedorSalas } from '../components/ContenedorSalas';
import { Header } from '../components/Header';
import styles from '../styles/general.module.css'

export const MainScreen = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <ContenedorSalas />
            </div>
        </>
    );
};
