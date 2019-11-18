import { CheveronDown, CheveronUp } from "react-zondicons";
import { SORT_ORDER } from "../../../../constants";
import React from "react";
import { useGlobalState } from "../../../../state/hook";

export default function CanvasTableHeader() {
  const [state, dispatch] = useGlobalState();

  const sortAscending = key => dispatch({
    type: "handleSort", payload: { sortKey: key, sortDirection: SORT_ORDER.ascending }
  });

  const sortDescending = key => dispatch({
    type: "handleSort", payload: { sortKey: key, sortDirection: SORT_ORDER.descending }
  });

  const { labels } = state;

  return (
    <thead className="bg-transparent">
    <tr className="canvas-table-header">
      {
        labels.map(label =>
          <th key={label}>
            {label === "index" ? <b>#</b> : label.charAt(0).toUpperCase() + label.slice(1)}
            <div className="d-inline-block text-nowrap">
              <CheveronDown onClick={() => sortDescending(label)}/>
              <CheveronUp onClick={() => sortAscending(label)}/>
            </div>
          </th>
        )
      }
    </tr>
    </thead>
  );
}