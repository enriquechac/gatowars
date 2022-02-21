import React from 'react';
import { ContenedorSalas } from '../components/ContenedorSalas';
import { Header } from '../components/Header';
import { LeftPanel } from '../components/LeftPanel';
import styles from '../styles/general.module.css'

export const MainScreen = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <LeftPanel />
                <ContenedorSalas />
            </div>
        </>
    );
};
