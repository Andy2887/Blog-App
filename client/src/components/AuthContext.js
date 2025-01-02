
// This file is used to create a context for the authentication status of the user.

import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value = {{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}