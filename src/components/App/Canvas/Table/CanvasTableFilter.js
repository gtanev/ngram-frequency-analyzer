import { Search } from "react-zondicons";
import React from "react";
import { useGlobalState } from "../../../../state/hook";
import { Input } from "reactstrap";

export default function CanvasTableFilter() {
  const [state, dispatch] = useGlobalState();

  const { labels } = state;

  const filterData = (e, key) => dispatch({
    type: "handleFilter", payload: { filterKey: key, filterValue: e.target.value }
  });

  return (
    <thead>
    <tr className="bg-light">
      {
        labels.map(label =>
          <td key={label} className="align-middle text-left p-1">
            {
              label === "index" ?
                <div className="d-inline-flex align-items-center p-2">
                  <Search size={16}/>
                </div> : (
                  <div className="d-inline-flex align-items-center w-75">
                    <Input type="text"
                           name="searchField"
                           id={`filter_${label}`}
                           placeholder={`Filter by ${label}`}
                           value={state.filterKey === label ? state.filterValue : ""}
                           onChange={e => filterData(e, label)}/>
                  </div>
                )
            }
          </td>
        )
      }
    </tr>
    </thead>
  );
}