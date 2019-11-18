import React, { Fragment } from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

export default function CanvasNavButton({ icon, action, visible }) {
  return visible
    ? <Button className="btn-light bg-transparent border-0 mr-1" onClick={action}>{icon}</Button>
    : null;
}
