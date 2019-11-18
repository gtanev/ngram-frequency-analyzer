import React from "react";
import { Table } from "reactstrap";
import Scrollbar from "react-smooth-scrollbar";
import CanvasTableHeader from "./CanvasTableHeader";
import CanvasTableBody from "./CanvasTableBody";
import CanvasTableFilter from "./CanvasTableFilter";

export default function CanvasTable({ data, labels, contentHeight }) {
  return (
    <div className="w-100 h-100">
      <Scrollbar alwaysShowTracks>
        <div style={{ height: contentHeight() }}>
          <Table hover>
            <CanvasTableFilter labels={labels} />
            <CanvasTableHeader labels={labels}/>
            <CanvasTableBody data={data}/>
          </Table>
        </div>
      </Scrollbar>
    </div>
  );
}