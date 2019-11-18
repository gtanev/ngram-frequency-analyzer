import React, { Component } from "react";
import { Nav, TabContent } from "reactstrap";
import { ArrowThickDown, ArrowThickUp, ChartBar, ScreenFull, ViewColumn } from "react-zondicons";

import { SORT_ORDER } from "../../../constants";
import CanvasNavItem from "./Navigation/CanvasNavItem";
import CanvasPane from "./CanvasPane";
import CanvasNavButton from "./Navigation/CanvasNavButton";
import CanvasPaneModal from "./CanvasPaneModal";
import AppBadge from "../AppBadge";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      fullScreen: false,
      dataReversed: false
    };
  }

  handleTabSwitch = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleFullScreen = () => {
    this.setState(prevState => ({ fullScreen: !prevState.fullScreen }));
  };

  reverseData = () => {
    this.props.dispatch({
      type: "handleSort",
      payload: {
        sortKey: this.props.state.sortKey,
        sortDirection: this.props.state.sortDirection === SORT_ORDER.ascending
          ? SORT_ORDER.descending
          : SORT_ORDER.ascending
      }
    });

    this.setState(prevState => ({ dataReversed: !prevState.dataReversed }));
  };

  render() {
    return (
      <div className="canvas" id="appCanvas">
        <div>
          <Nav tabs className="mt-2">
            <CanvasNavItem tab={1} title="Table" active={this.state.activeTab === "1"}
                           icon={<ChartBar className="mb-1"/>}
                           action={() => this.handleTabSwitch("1")}/>
            <CanvasNavItem tab={2} title="Chart" active={this.state.activeTab === "2"}
                           icon={<ViewColumn className="mb-1"/>}
                           action={() => this.handleTabSwitch("2")}/>
            <CanvasNavButton visible={this.props.state.data.length}
                             action={this.reverseData}
                             toolTip={"reverse sort order"}
                             icon={this.state.dataReversed
                               ? <ArrowThickUp size={15}/>
                               : <ArrowThickDown size={15}/>}/>
            <CanvasNavButton visible={this.props.state.data.length}
                             action={this.toggleFullScreen}
                             toolTip={"toggle fullscreen"}
                             icon={<ScreenFull size={15}/>}/>

            <div className="canvas-ngram-counter">
              <AppBadge id="ngram-counter" text={this.props.state.data.length}
                        tooltipPlacement="left" tooltipText="Number of n-grams"/>
            </div>
          </Nav>
          <TabContent id="paneContainer"
                      activeTab={this.state.activeTab}
                      className="canvas-pane-container">
            <CanvasPane tabId={this.state.activeTab}/>
          </TabContent>
        </div>
        <CanvasPaneModal visible={this.state.fullScreen} title="N-Gram Frequencies"
                         body={<CanvasPane tabId={this.state.activeTab} modal/>}/>
      </div>
    );
  };
}
