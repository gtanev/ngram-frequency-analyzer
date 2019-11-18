import React from "react";
import { NavItem, NavLink } from "reactstrap";

export default function CanvasNavItem({ title, icon, action, active }) {
  return (
      <NavItem style={{ cursor: "pointer" }}>
        <NavLink active={active} onClick={action}>
          {icon}
          <span className="canvas-nav-item-text">{title}</span>
        </NavLink>
      </NavItem>
  );
}
