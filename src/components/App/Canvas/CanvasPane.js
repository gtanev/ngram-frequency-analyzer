import React from "react";
import { TabPane } from "reactstrap";

import CanvasTable from "./Table/CanvasTable";
import CanvasBarChart from "./BarChart/CanvasBarChart";
import CanvasToast from "./CanvasToast";
import { useGlobalState } from "../../../state/hook";
import selectors from "../../../state/selectors";

export default function CanvasPane({ tabId, modal }) {
  const [state] = useGlobalState();
  const data = selectors.visibleData(state);

  const contentHeight = () => {
    const viewportHeight = window.clientHeight || document.documentElement.clientHeight;

    if (modal) {
      return document.getElementById("appContainer").clientHeight > viewportHeight
        ? document.getElementById("paneContainer").clientHeight
        : document.getElementById("appContainer").clientHeight - 170;
    }

    return document.getElementById("paneContainer").clientHeight - 20;
  };

  return state.data && state.data.length ? (
    <TabPane tabId={tabId} className="h-100">
      {tabId === "1" && <CanvasTable data={data} labels={state.labels} contentHeight={contentHeight}/>}
      {tabId === "2" && <CanvasBarChart data={data} contentHeight={contentHeight}/>}
    </TabPane>) : (
    <TabPane tabId={tabId} className="h-100">
      <CanvasToast error={state.error}/>
    </TabPane>
  );
}