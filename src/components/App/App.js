import React from "react";
import "../../styles/app.scss";
import AppView from "./AppView";
import { ContextProvider } from "../../state/hook";
import { initialState, reducer } from "../../state/store";

export default function App() {
  return (
    <ContextProvider initialState={initialState} reducer={reducer}>
      <AppView/>
    </ContextProvider>
  );
}