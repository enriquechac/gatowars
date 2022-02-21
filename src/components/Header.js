import React from 'react';
import styles from '../styles/header.module.css';
import { AuthComponent } from './AuthComponent';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>😾 GatoWars</h2>
      <AuthComponent />
    </header>
  );
};
