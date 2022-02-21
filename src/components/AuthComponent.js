import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from '../firebaseConfig';
import style from '../styles/authComponent.module.css';

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const AuthComponent = () => {
  const { user } = useContext(AuthContext);

  const handleLogin = (e) => {
    auth.languageCode = 'es';
    sessionStorage.setItem('GatoLoginInProgress', true);
    signInWithRedirect(auth, provider);
  };

  const handleLogout = (e) => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    if (!user.logged && sessionStorage.getItem('GatoLoginInProgress')) {
      getRedirectResult(auth).then((result) => {
        sessionStorage.removeItem('GatoLoginInProgress');
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
      });
    }
  }, []);

  if (user.logged) {
    let { displayName, photoURL } = user.user;
    return (
      <div className={style.authContainer}>
        <img className={style.fotoPerfil} src={photoURL} />
        <p>{displayName}</p>
        <button className={style.btngrad} onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className={style.btngrad} onClick={handleLogin}>
          Login con google
        </button>
      </div>
    );
  }
};
