import React, { useReducer } from 'react';
import globalReducer from './globalReducer';
import initialState from './initialState';
import AppContext from './appContext';

function AppProvider({children}) {

    const [ state, dispatch] = useReducer(globalReducer, initialState);

    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>

}

export default AppProvider;