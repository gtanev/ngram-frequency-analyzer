import React, { Component } from "react";
import { Container } from "reactstrap";
import "../../styles/app.scss";

import InputForm from "./InputForm/InputForm";
import Canvas from "./Canvas/Canvas";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { StateContext } from '../../state/hook';
import AppSeparator from './AppSeparator';

export default class AppView extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => this.forceUpdate());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.forceUpdate());
  }

  render() {
    return (
      <StateContext.Consumer>
        {([state, dispatch]) => (
          <div className="app-view">
            <Container className="app-container" id="appContainer">
              <AppHeader/>
              <InputForm dispatch={dispatch}/>
              <AppSeparator/>
              <Canvas state={state} dispatch={dispatch}/>
              <AppFooter/>
            </Container>
          </div>
        )}
      </StateContext.Consumer>
    );
  }
}