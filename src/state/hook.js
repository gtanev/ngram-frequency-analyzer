import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext(null);

export const ContextProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useGlobalState = () => useContext(StateContext);