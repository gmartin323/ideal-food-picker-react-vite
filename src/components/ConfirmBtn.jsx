import React from "react";

export default function ConfirmBtn(props) {
  return (
    <div
      className="confirm-btn"
      onClick={props.onClick}
    >
      Suggest a place!
    </div>
  )
}