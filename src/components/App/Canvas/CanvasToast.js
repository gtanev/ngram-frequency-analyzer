import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const defaultMessage = "No results to show.";

export default function CanvasToast(props) {
  return (
    <div className="canvas-toast-container w-100 h-100">
      <Toast fade>
        <ToastHeader className={props.error ? "bg-dark text-white" : "bg-warning"}>
          {props.error && "Error"}
        </ToastHeader>
        <ToastBody>
          {props.error || defaultMessage}
        </ToastBody>
      </Toast>
    </div>
  );
}