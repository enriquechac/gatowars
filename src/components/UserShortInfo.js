import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import styles from '../styles/userShortInfo.module.css';

export const UserShortInfo = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL = '' } = user.user || {
    displayName: 'none',
    photoURL: '',
  };

  console.log(user.user);

  return (
    <div className={styles.container}>
      <div className={styles.colorLine}></div>
      <div className={styles.info}>
        <img className={styles.userPhoto} src={photoURL} />
        <p className={styles.userName}>{displayName}</p>
        <section className={styles.stats}>
          <div>
            <p>0</p>
            <p>Victorias</p>
          </div>
          <div>
            <p>0</p>
            <p>Derrotas</p>
          </div>
        </section>
      </div>
    </div>
  );
};
