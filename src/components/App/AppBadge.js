import React from "react";
import { Badge, UncontrolledTooltip } from "reactstrap";


export default function AppBadge({ id, text, tooltipPlacement, tooltipText }) {
  return (
    <Badge pill id={id} color="secondary" style={{ cursor: "pointer", fontSize: "0.8rem" }}>
      {text}
      <UncontrolledTooltip id={`${id}_tip`}
                           hideArrow
                           innerClassName="bg-light font-weight-bold text-secondary"
                           placement={tooltipPlacement}
                           target={id}>
        {tooltipText}
      </UncontrolledTooltip>
    </Badge>
  );
}