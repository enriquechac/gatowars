import React, { useEffect, useReducer } from 'react';

//? Reducer
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

//? Firebase
import { getAuth, onAuthStateChanged } from './firebaseConfig';
import { LoadingScreen } from './pages/LoadingScreen';
import { AppRouter } from './router/AppRouter';

const auth = getAuth()


export const GatoApp = () => {

    // Estado inicial de la sesion
    const userInitial = {
        loading: true
    }

    // Creacion del reducer
    const [user, dispatch] = useReducer(authReducer, userInitial);


    // Verificar si hay un usuario con sesion iniciada
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({
                    type: 'login', payload: {user}
                })
            } else {
                dispatch({
                    type: 'logout',
                })
            }
        });
    
      return unsuscribe
    }, [])
    

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {user.loading ? <LoadingScreen /> : <AppRouter />}
        </AuthContext.Provider>
    );
};
